import { useState, useEffect } from 'react';

/**
 * Load graph data.
 *
 * @param {string | object} source
 *   - string: URL to fetch JSON from
 *   - object: already-loaded graph data (returned as-is)
 *
 * @returns {{ data, loading, error }}
 */
export default function useGraphData(source) {
  const [data, setData] = useState(
    source && typeof source === 'object' ? source : null
  );
  const [loading, setLoading] = useState(
    !source || typeof source !== 'object'
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (!source) {
      setData(null);
      setLoading(false);
      setError(new Error('No source provided'));
      return;
    }

    if (typeof source === 'object') {
      setData(source);
      setLoading(false);
      setError(null);
      return;
    }

    if (typeof source === 'string') {
      setLoading(true);
      setError(null);
      fetch(source)
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((json) => {
          if (cancelled) return;
          setData(json);
          setLoading(false);
        })
        .catch((err) => {
          if (cancelled) return;
          setError(err);
          setLoading(false);
        });
    }

    return () => {
      cancelled = true;
    };
  }, [source]);

  return { data, loading, error };
}