# Key Terms -> definitions, final pass.
#
# Owner's scheme (2026-09-15): every Key Terms head on a tool page links to its
# entry on the definitions page; the definitions entry carries the lesson link.
# So a head never points at a lesson, and the earlier fallbacks are undone:
#
#   **Term** - ...                         -> [Term](!/linear-algebra/definitions#id) - ...
#   [Term](!/linear-algebra/<lesson>) - ...  -> [Term](!/linear-algebra/definitions#id) - ...
#   **Term** ... [word](!definitions#id)   -> head takes the link, the inner
#                                             plain-word link to the SAME entry
#                                             is unwrapped so one entry does not
#                                             link its own definition twice
#
# The bold is REPLACED by the link, never wrapped ("never bold+link").
# Maths in a head stays outside the label: "Rank $r$" -> [Rank](!...#rank) $r$.
#
# Resolution order: exact slug of the cleaned head against the ids in the live
# glossary list (linearAlgebraDefinitions.js - the file the page actually
# renders), then ALIASES for heads whose wording differs from the entry's, then
# singular/plural. Heads that resolve nowhere are left exactly as they are.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
GLOSSARY = 'app/api/db/definitions/linear-algebra/linearAlgebraDefinitions.js'
DEFS = '/linear-algebra/definitions'
TODAY = datetime.date.today().isoformat()

REG = json.load(io.open(REG_PATH, encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

# ids the page renders now that DefinitionsGlossary uses item.id
IDS = set(re.findall(r"^    id: '([a-z0-9_]+)',", io.open(GLOSSARY, encoding='utf-8').read(), flags=re.M))

# head wording -> entry id, where the words differ (from definitions-triage.md)
ALIASES = {
    'symmetric': 'symmetric_matrix', 'inverse': 'inverse_matrix',
    'singular': 'singular_matrix', 'positive definite': 'positive_definite_matrix',
    'definiteness': 'positive_definite_matrix', 'orthonormal': 'orthonormal_set',
    'euclidean norm': 'magnitude', 'norm': 'magnitude',
    'minor and cofactor': 'cofactor', 'trace and determinant': 'trace',
    'pivot columns': 'pivot_column', 'free column': 'free_variable',
    'free column free variable': 'free_variable',
    'pivot column leading variable': 'pivot_column',
    'upper triangular': 'triangular_matrix', 'lower triangular': 'triangular_matrix',
    'unit lower triangular': 'triangular_matrix',
    'row reduction': 'gaussian_elimination', 'row operations': 'elementary_row_operation',
    'orthogonalization': 'gram_schmidt_process',
    'gram schmidt': 'gram_schmidt_process', 'gram schmidt process': 'gram_schmidt_process',
    'gram-schmidt': 'gram_schmidt_process',
    'dyadic product': 'outer_product', 'tensor product': 'outer_product',
    'column times row': 'outer_product', 'rank 1 matrix': 'outer_product',
    'rank one form': 'outer_product', 'schur product': 'hadamard_product',
    'left singular vectors': 'singular_value_decomposition',
    'right singular vectors': 'singular_value_decomposition',
    'singular value decomposition': 'singular_value_decomposition', 'svd': 'singular_value_decomposition',
    'cramer s rule': 'cramers_rule', "cramer's rule": 'cramers_rule',
    'sarrus s rule': 'sarrus_rule', "sarrus's rule": 'sarrus_rule',
    'back substitution': 'back_substitution', 'back-substitution': 'back_substitution',
    'rank nullity': 'rank_nullity_theorem', 'rank nullity theorem': 'rank_nullity_theorem',
    'rank-nullity': 'rank_nullity_theorem', 'rank-nullity theorem': 'rank_nullity_theorem',
    'least squares solution': 'least_squares_solution', 'least-squares solution': 'least_squares_solution',
    'element wise operation': 'element_wise_operation', 'element-wise operation': 'element_wise_operation',
    'component wise operation': 'element_wise_operation', 'component-wise operation': 'element_wise_operation',
    'skew symmetric matrix': 'skew_symmetric_matrix', 'skew-symmetric matrix': 'skew_symmetric_matrix',
    'right hand rule': 'right_hand_rule', 'right-hand rule': 'right_hand_rule',
    'cholesky decomposition': 'cholesky_factorization',
    'lu factorization': 'lu_decomposition', 'qr factorization': 'qr_decomposition',
    'diagonalizable': 'diagonalizable_matrix', 'defective': 'defective_matrix',
    'nilpotent': 'nilpotent_matrix', 'idempotent': 'idempotent_matrix',
    'involution': 'involutory_matrix', 'involutory': 'involutory_matrix',
    'consistent': 'consistent_system', 'unique solution': 'consistent_system',
    'singular system': 'consistent_system',
    'projection': 'vector_projection', 'scalar projection': 'vector_projection',
    'foot of the perpendicular': 'vector_projection',
    'diagonal entry': 'main_diagonal', 'off diagonal entries': 'main_diagonal',
    'above the diagonal': 'main_diagonal', 'below the diagonal': 'main_diagonal',
    'same shape requirement': 'conformability', 'same length requirement': 'conformability',
    'result shape': 'conformability', 'result length': 'conformability',
    'inner dimensions': 'conformability', 'outer dimensions': 'conformability',
    'square requirement': 'conformability',
    'sign pattern': 'cofactor_expansion', 'adjugate formula': 'adjugate',
    'replaced matrix': 'cramers_rule', 'multiplier': 'partial_pivoting',
    'sum of squared errors': 'residual', 'right hand side': 'coefficient_matrix',
    'coordinate vector': 'coordinates', 'eigenvector basis': 'diagonalization',
    'orthonormal eigenvectors': 'spectral_decomposition', 'orthonormal columns': 'orthogonal_matrix',
    'inverse equals transpose': 'orthogonal_matrix',
    # NOT 'length preservation' -> isometry: on the vector pages that head means
    # "the result has the same number of components", nothing to do with isometry.
    'null space': 'null_space', 'column space': 'column_space', 'row space': 'row_space',
    'left null space': 'left_null_space', 'kernel': 'null_space', 'image': 'image',
    'range': 'image', 'magnitude': 'magnitude', 'cofactor matrix': 'cofactor_matrix',
    'zero vector': 'zero_vector', 'zero matrix': 'zero_matrix',
}

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")

# ---------------------------------------------------------------------------
# Second tier: a head with NO definitions entry goes to a lesson section, if one
# exists (Alex, 2026-09-15: "Scalar multiplication" is not worth a definition -
# send it to the lesson). Resolution: concept index -> lesson page title ->
# lesson section title. Same logic as kt-lessons.py, so results agree.
# ---------------------------------------------------------------------------
CREG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))
INDEX = json.load(io.open('line2-concept-index.json', encoding='utf-8'))
PAGE_BY_NAME, SECTION_TITLES = {}, {}
for _k, _v in CREG['pages'].items():
    if not _k.startswith('linear-algebra/'):
        continue
    _url = '/' + _v['pagePath'][len('pages/'):-len('/index.jsx')]
    PAGE_BY_NAME[_v['slug'].split('/')[-1].replace('-', ' ').lower()] = _url
    try:
        _src = io.open(_v['pagePath'], encoding='utf-8').read()
    except Exception:
        continue
    _lv = '\n'.join('' if l.lstrip().startswith('//') else l for l in _src.split('\n'))
    _lv = re.sub(r'/\*.*?\*/', '', _lv, flags=re.S)
    _titles = dict(re.findall(r'\n\s{2,6}(obj\d+)\s*:\s*\{\s*\n?\s*title\s*:\s*`([^`]*)`', _lv))
    for _m in re.finditer(r"id\s*:\s*[`'\"]([^`'\"]+)[`'\"]", _lv):
        _kk = re.search(r'sectionsContent[.\[\']+(\w+)', _lv[_m.end():_m.end() + 300])
        _t = _titles.get(_kk.group(1)) if _kk else None
        if not _t:
            continue
        _n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', _t.lower())).strip()
        SECTION_TITLES.setdefault(_n, '%s#%s' % (_url, _m.group(1)))
        _s = re.sub(r'^(the|a|an)\s+', '', _n)
        if _s != _n:
            SECTION_TITLES.setdefault(_s, '%s#%s' % (_url, _m.group(1)))


def lesson_for(term):
    t = clean(term).lower()
    if not t:
        return None
    cands = [t, t.replace('-', ' ')]
    for a, b in (('factorization', 'decomposition'), ('factorisation', 'decomposition')):
        if a in t:
            cands.append(t.replace(a, b))
    for c in list(cands):
        cands.append(c[:-1] if c.endswith('s') else c + 's')
        for q in (' matrix', ' form', ' space', ' product'):
            cands.append(c + q)
    seen = set()
    cands = [c for c in cands if not (c in seen or seen.add(c))]
    for c in cands:
        e = INDEX.get(c)
        if e:
            by = (e.get('bySection') or {}).get('linear-algebra') or e
            u = by.get('contentUrl')
            if u and '/visual-tools/' not in u and u.startswith('/linear-algebra'):
                return u
    for c in cands:
        if c in PAGE_BY_NAME:
            return PAGE_BY_NAME[c]
    for c in cands:
        n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', c)).strip()
        if n in SECTION_TITLES:
            return SECTION_TITLES[n]
    for c in cands:
        n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', c)).strip()
        if len(n) < 5:
            continue
        for title, u in SECTION_TITLES.items():
            if title == n or title.startswith(n + ' '):
                return u
    return None


# a head: bold, or an existing link, optionally followed by maths, then a dash
# The 2D tool pages write the dash as the entity &mdash; rather than the
# character, so both forms must count as a head separator.
HEAD = re.compile(r'(?:\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(!([^)\n]+)\))'
                  r'((?:\s*\$[^$\n]*\$)*)(?=\s*(?:—|–|-|&mdash;)\s)')


def mask_comments(src):
    o = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    t = ''.join(o)
    for m in re.finditer(r'/\*.*?\*/', t, flags=re.S):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    return ''.join(o)


def spans(m):
    out = {}
    for x in re.finditer(r"sectionsContent\s*[:=]\s*\{", m):
        s = x.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", m[s:])
        e = s + (stop.start() if stop else len(m) - s)
        for c in CONTENT.finditer(m, s, e):
            out.setdefault(c.group(1), (c.start(2), c.end(2)))
    return out


def wired(m):
    r = re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", m)
    return r or re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", m)


def clean(term):
    t = re.sub(r'\$[^$]*\$', ' ', term)
    t = re.sub(r'\s*\([^)]*\)', ' ', t)
    t = re.sub(r'[^A-Za-z0-9\'\-\s]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


def resolve(term):
    base = clean(term).lower()
    if not base:
        return None
    cands = [base, base.replace('-', ' '), base.replace("'", ''), base.replace("'", ' ')]
    for c in list(cands):
        cands.append(c[:-1] if c.endswith('s') else c + 's')
    for c in cands:
        slug = re.sub(r'\s+', '_', c.replace('-', ' ').replace("'", ''))
        if slug in IDS:
            return slug
    for c in cands:
        a = ALIASES.get(c)
        if a and a in IDS:
            return a
    return None


apply = '--apply' in sys.argv
stats = collections.Counter()
unresolved = []

for key in sorted(LA):
    tool = LA[key]
    slugname = key.replace('linear-algebra-', '')
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    obj_of = {s: o for o, s in wired(masked)}
    o = obj_of.get('key-terms')
    if o not in sp:
        continue
    ks, ke = sp[o]
    body = raw[ks:ke]

    heads = list(HEAD.finditer(body))
    edits = []
    page_changes = []
    for i, h in enumerate(heads):
        term = (h.group(1) or h.group(2)).strip()
        old_url = h.group(3)
        maths = h.group(4) or ''
        entry_start = h.end()
        entry_end = heads[i + 1].start() if i + 1 < len(heads) else len(body)
        entry = body[entry_start:entry_end]

        ident = resolve(term)
        if not ident:
            # Tier 2: no definition - a lesson section, if there is one.
            lesson = lesson_for(term)
            if not lesson:
                stats['unresolved (stays bold)'] += 1
                unresolved.append((slugname, term))
                continue
            if old_url and '/definitions' not in old_url:
                stats['already on a lesson'] += 1
                continue
            label2 = re.sub(r'\$[^$]*\$', '', term).strip(' -–—')
            edits.append((ks + h.start(), ks + h.end(),
                          '[%s](!%s)%s' % (label2, lesson, maths)))
            stats['bold -> lesson (no definition)'] += 1
            page_changes.append((term, 'bold -> lesson', lesson.rsplit('/', 1)[-1]))
            if apply:
                tool['relatedTerms'].append({
                    'term': term.lower(), 'entity': None, 'sections': ['key-terms'],
                    'status': 'linked',
                    'links': [{'fromSection': 'key-terms', 'surface': label2,
                               'target': {'path': lesson.split('#')[0],
                                          'section': lesson.split('#')[1] if '#' in lesson else None},
                               'method': 'key-terms-head-lesson', 'role': 'lesson',
                               'added': TODAY}],
                })
            continue
        url = '%s#%s' % (DEFS, ident)

        label = re.sub(r'\$[^$]*\$', '', term).strip(' -–—')
        pre = ''
        mm = re.match(r'\s*((?:\$[^$]*\$\s*)+)', term)
        if mm:
            pre = mm.group(1).strip() + ' '
            label = term[mm.end():].strip()

        if old_url == url:
            # Head already correct (some pages were done by hand). No page
            # edit, but the registry record below is still normalised, and an
            # inner duplicate link to the same entry is still unwrapped.
            stats['already right'] += 1
        else:
            # 1. the head takes the definitions link; bold replaced, maths kept outside
            new_head = '%s[%s](!%s)%s' % (pre, label, url, maths)
            edits.append((ks + h.start(), ks + h.end(), new_head))
            kind = 'bold -> definitions' if h.group(1) else (
                'lesson -> definitions' if '/definitions' not in (old_url or '') else 'definitions anchor corrected')
            stats[kind] += 1
            page_changes.append((term, kind, ident))

        # 2. unwrap an inner plain-word link to the same entry, if the earlier
        #    pass had put one there
        for im in re.finditer(r'\[([^\]\n]+)\]\(!' + re.escape(url) + r'\)', entry):
            edits.append((ks + entry_start + im.start(), ks + entry_start + im.end(), im.group(1)))
            stats['inner duplicate unwrapped'] += 1

        if apply:
            # registry: the head's record becomes a definition link; drop any
            # head-level lesson/definition record for this term first
            keep = []
            for t in tool['relatedTerms']:
                links = t.get('links') or []
                if (t['status'] == 'linked' and links
                        and links[0].get('fromSection') == 'key-terms'
                        and clean(links[0].get('surface') or t['term']).lower() == clean(term).lower()):
                    continue
                keep.append(t)
            keep.append({
                'term': term.lower(), 'entity': ident, 'sections': ['key-terms'],
                'status': 'linked',
                'links': [{'fromSection': 'key-terms', 'surface': label,
                           'target': {'path': DEFS, 'section': ident},
                           'method': 'key-terms-head', 'role': 'definition',
                           'added': TODAY}],
            })
            tool['relatedTerms'] = keep

    if page_changes:
        print('%-34s %d change(s)' % (slugname, len(page_changes)))
        for term, kind, ident in page_changes:
            print('      %-30s %-30s #%s' % (term[:30], kind, ident))

    if apply and edits:
        new = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new)

print('\n' + '\n'.join('%-28s %d' % (k, v) for k, v in stats.most_common()))
if unresolved:
    print('\nunresolved heads (%d), left as they are - sample:' % len(unresolved))
    for s, t in unresolved[:25]:
        print('   %-30s %s' % (s, t))
print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))

if apply:
    REG['$meta']['lineTwo']['keyTermsToDefinitions'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
