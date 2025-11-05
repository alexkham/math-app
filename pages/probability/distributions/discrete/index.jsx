import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import { distributionsDiagramsData } from '@/app/api/db/diagrams/probability/distributions'
import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
import { processContent } from '@/app/utils/contentProcessor'


export async function getStaticProps(){

  const keyWords=['bernoulli trial','bernoulli experiment','discrete distributions','binomial distribution',
    'uniform discrete distribution']


  const uniformTable=`
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uniform Discrete Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
        <thead>
            <tr>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
                <th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Uniform Discrete Distribution</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models experiments where each outcome is equally likely (e.g., rolling a fair die, random selection from a finite set)</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {a, a+1, a+2, ..., b}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Finite</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[a, b] where a, b are integers and a ≤ b</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a (minimum value), b (maximum value)</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Not applicable (single selection)</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">All selections are equal - no outcome has special meaning</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = 1/(b - a + 1) for k ∈ {a, a+1, ..., b}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = (k - a + 1)/(b - a + 1) for k ∈ {a, a+1, ..., b}</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = (a + b)/2</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = ((b - a + 1)² - 1)/12</td>
            </tr>
            <tr>
                <td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
                <td style="padding: 12px 15px; color: #34495e;">σ = √(((b - a + 1)² - 1)/12)</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `

  const binomialTable=`
  <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Binomial Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Binomial Distribution</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models the number of successes in a fixed number of independent trials, each with the same probability of success (e.g., number of heads in 10 coin flips)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {0, 1, 2, ..., n}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Finite</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, n] where n is a positive integer</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n (number of trials), p (probability of success on each trial), where 0 ≤ p ≤ 1</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Yes, n is fixed before the experiment</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Fixed number of independent trials; counting total number of successes; each trial has binary outcome (success/failure)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = C(n,k) × p^k × (1-p)^(n-k) for k ∈ {0, 1, ..., n}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = Σ(i=0 to k) C(n,i) × p^i × (1-p)^(n-i)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = np</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = np(1-p)</td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
<td style="padding: 12px 15px; color: #34495e;">σ = √(np(1-p))</td>
</tr>
</tbody>
</table>
</body>
</html>
  `
const geometricTable=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Geometric Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Geometric Distribution</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models the number of trials until the first success in a sequence of independent trials, each with the same probability of success (e.g., number of coin flips until first heads)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {1, 2, 3, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Infinite</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1, ∞)</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p (probability of success on each trial), where 0 < p ≤ 1</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">No, trials continue until the first success occurs</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Variable number of independent trials; counting trials until first success; each trial has binary outcome (success/failure); memoryless property</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = (1-p)<sup>k-1</sup> × p for k ∈ {1, 2, 3, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = 1 - (1-p)<sup>k</sup> for k ∈ {1, 2, 3, ...}</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = 1/p</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = (1-p)/p<sup>2</sup></td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
<td style="padding: 12px 15px; color: #34495e;">σ = √((1-p)/p<sup>2</sup>) = √(1-p)/p</td>
</tr>
</tbody>
</table>
</body>
</html>
`

const negativeBinomialTable=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Negative Binomial Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Negative Binomial Distribution</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models the number of trials until r successes occur in a sequence of independent trials, each with the same probability of success (e.g., number of coin flips until 5th heads)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {r, r+1, r+2, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Infinite</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[r, ∞) where r is a positive integer</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r (number of successes desired), p (probability of success on each trial), where 0 < p ≤ 1 and r is a positive integer</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">No, trials continue until r successes occur</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Variable number of independent trials; counting trials until r<sup>th</sup> success; each trial has binary outcome (success/failure); generalization of geometric distribution</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = C(k-1, r-1) × p<sup>r</sup> × (1-p)<sup>k-r</sup> for k ∈ {r, r+1, r+2, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = Σ(i=r to k) C(i-1, r-1) × p<sup>r</sup> × (1-p)<sup>i-r</sup></td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = r/p</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = r(1-p)/p<sup>2</sup></td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
<td style="padding: 12px 15px; color: #34495e;">σ = √(r(1-p))/p</td>
</tr>
</tbody>
</table>
</body>
</html>
`

const hypergeometricTable=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hypergeometric Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Hypergeometric Distribution</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models the number of successes in a sample drawn without replacement from a finite population containing both successes and failures (e.g., drawing red balls from an urn without replacing them)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {max(0, n-N+K), ..., min(n, K)}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Finite</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[max(0, n-N+K), min(n, K)]</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">N (population size), K (number of success states in population), n (number of draws), where N, K, n are positive integers with K ≤ N and n ≤ N</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Yes, n is fixed before the experiment</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sampling without replacement from finite population; fixed number of draws; counting successes in sample; each item can only be selected once</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = [C(K, k) × C(N-K, n-k)] / C(N, n)</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = Σ(i=0 to k) [C(K, i) × C(N-K, n-i)] / C(N, n)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = n × (K/N)</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = n × (K/N) × (1 - K/N) × [(N-n)/(N-1)]</td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
<td style="padding: 12px 15px; color: #34495e;">σ = √[n × (K/N) × (1 - K/N) × (N-n)/(N-1)]</td>
</tr>
</tbody>
</table>
</body>
</html>
`
const poissonTable=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Poisson Distribution</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Property</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Poisson Distribution</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Description</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Models the number of events occurring in a fixed interval of time or space when events occur independently at a constant average rate (e.g., number of phone calls received per hour)</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Support (Domain)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X ∈ {0, 1, 2, 3, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Finite or Infinite?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Infinite</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Bounds/Range</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Parameters</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">λ (lambda, the average rate of events), where λ > 0</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Number of trials known/fixed beforehand?</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">No fixed number of trials; counts events in a fixed interval</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Selection Property/Mechanism</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Events occur independently; constant average rate; events in non-overlapping intervals are independent; useful for rare events</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">PMF (Probability Mass Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = (λ<sup>k</sup> × e<sup>-λ</sup>) / k! for k ∈ {0, 1, 2, ...}</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">CDF (Cumulative Distribution Function)</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X ≤ k) = Σ(i=0 to k) (λ<sup>i</sup> × e<sup>-λ</sup>) / i! = e<sup>-λ</sup> × Σ(i=0 to k) λ<sup>i</sup> / i!</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Mean</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = λ</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Variance</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = λ</td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Standard Deviation</td>
<td style="padding: 12px 15px; color: #34495e;">σ = √λ</td>
</tr>
</tbody>
</table>
</body>
</html>
`
const occurenceMatrix=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Discrete Distributions Occurrence Matrix</title>
</head>
<body style="margin: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
<table style="border-collapse: collapse; width: 100%; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
<thead>
<tr>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: left; font-weight: bold;">Distribution</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Equal Probabilities</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Fixed n, Independent Trials</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Without Replacement</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Infinite Trials</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Until First Success</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Until r-th Success</th>
<th style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-weight: bold;">Constant Rate (λ)</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Discrete Uniform</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Binomial</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Hypergeometric</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
</tr>
<tr>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Geometric</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
</tr>
<tr style="background-color: #f8f9fa;">
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c3e50;">Negative Binomial</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: bold; color: #2c3e50;">Poisson</td>
<td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
<td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
<td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
</tr>
</tbody>
</table>
</body>
</html>
`





    const sectionsContent={

    uniform:{
      title:`Uniform Discrete Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=1) →@`,
      checklist:`<h2 style="color: #3b82f6;"> Checklist for Identifying a Discrete Uniform Distribution</h2>
✔ All values in the range are equally likely.  
✔ The variable takes on a finite set of integer values.  
✔ $X$ is defined over a fixed range from a to b (inclusive).  
✔ No value is favored over another.
`,
notation :`**Notations Used:**

$X \\sim \\text{Unif}(a, b)$ or $X \\sim \\text{DU}(a, b)$ — **distribution of the random variable**.

$DiscreteUniform(a, b)$ — **used to denote the distribution itself (not the random variable)**.

$U(a, b)$ — **also used, though it can refer to either discrete or continuous; context is important**.

$P(X = k) = \\frac{1}{b - a + 1}, \\quad \\text{for } k = a, a+1, \\dots, b$ — probability mass function

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
`,
parameters:`
 ** Parameters of Uniform Discrete Distribution **

   $a$  : the smallest integer in the range  
   $b$  : the largest integer in the range

The uniform discrete distribution assigns equal probability to each integer between $a$ and $b$, inclusive. The values must be equally spaced and finite in number. The parameters define the range — once $a$ and $b$ are set, every integer in that closed interval has probability $\\frac{1}{b - a + 1}$.
This distribution is used when there's no reason to favor any outcome over another — every value is equally likely by design.

`,
pmf:`
The **probability mass function (PMF)** of a **discrete uniform distribution** is given by:

$P(X = x) = \\frac{1}{b - a + 1} = \\frac{1}{n}, \\quad x \\in \\{x_1, x_2, \\dots, x_n\\}$

Where :
$a$ = lower bound (integer)
$b$ = upper bound (integer)
$𝑛=b−a+1$ is total number of possible values 

### Intuition Behind the Formula

**Uniformity**: The term "uniform" implies that each outcome is equally likely. That is, no single value of the random variable is preferred over another. This is the key feature of a uniform distribution.

**Support (Range of the Random Variable)**:
  * The random variable $X$ can take on $n = b - a + 1$ distinct values: $x_1, x_2, \\ldots, x_n$.
  * These values could be consecutive integers (like $1, 2, 3, \\ldots, n$) or any set of $n$ distinct values.
  * The **range** or **support** is thus a finite, countable set.

**Logic Behind the Formula**:
 
 The total probability must sum to 1:
  
  $\\sum_{i=1}^n P(X = x_i) = 1$
  
Since all probabilities are equal:
  
  $n \\cdot \\frac{1}{n} = (b - a + 1) \\cdot \\frac{1}{b - a + 1} = 1$
  
  This makes the individual probability of each outcome $\\frac{1}{n} = \\frac{1}{b - a + 1}$.

### Practical Example
Suppose you roll a fair six-sided die. The possible outcomes are $\\{1, 2, 3, 4, 5, 6\\}$, and the probability of each face is:

$P(X = x) = \\frac{1}{6} = \\frac{1}{6 - 1 + 1}, \\quad x = 1, 2, 3, 4, 5, 6$

Each face has an equal and independent chance of appearing.

`
  
    },
    binomial:{
      title:`Binomial Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=2) →@

      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use binomial distributions cummulative table](!/tables/probability/binomial-distribution) →@
      `,
      checklist:`
<h2 style="color: #3b82f6;"> Checklist for Identifying a Binomial Distribution</h2>
✔ Repeating the same [Bernoulli](!/probability/distributions/discrete#bernoulli) trial independently (each trial does not depend on the others).  
✔ The trial is repeated exactly n times.  
✔ $X$ is defined as the number of successes out of the total trials.`,
parameters:`

**Parameters of Binomial Distribution** 

$𝑛$ : fixed number of independent trials;

$𝑝$ : probability of success in each trial;

This distribution models the number of successes when repeating the same binary experiment $𝑛$ times under identical conditions. The two parameters fully describe the setup: 
$𝑛$ gives the structure — how many attempts, and $𝑝$ defines the behavior of each — what chance success has.
It’s useful to compare with the negative binomial, where instead of fixing how many trials you run, you fix how many successes you want and ask: how many trials will it take? Both deal with repeated binary outcomes, but what’s held constant — trials vs. successes — flips.
`,
notation:`

**Notations Used:**

$X \\sim \\text{Bin}(n, p)$ or $X \\sim \\text{B}(n, p)$ — **distribution of the random variable**.  

$Binomial(n, p)$ — **used to denote the distribution itself (not the random variable)**.

$B(n,p)$ — **occasionally used in theoretical or formal contexts (less common)**.

$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$ — probability mass function

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
`,
  pmf:`
  The **probability mass function (PMF)** of a **binomial distribution** is given by:

$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$

where $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is the binomial coefficient.

### Intuition Behind the Formula

* **Fixed Number of Trials**: The binomial distribution models the number of successes in $n$ independent trials, where each trial has only two possible outcomes: success or failure.

* **Parameters**:
  * $n$: The number of independent trials
  * $p$: The probability of success on each trial
  * $1-p$: The probability of failure on each trial (often denoted as $q$)

* **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values from $0$ to $n$ (inclusive).
  * These represent the possible number of successes: $0, 1, 2, \\ldots, n$.
  * The **support** is thus a finite set of $n+1$ non-negative integers.

* **Logic Behind the Formula**:
  * $\\binom{n}{k}$: The number of ways to choose $k$ successes from $n$ trials
  * $p^k$: The probability of getting exactly $k$ successes
  * $(1-p)^{n-k}$: The probability of getting exactly $n-k$ failures
  * The total probability sums to 1:
  
  $\\sum_{k=0}^{n} P(X = k) = \\sum_{k=0}^{n} \\binom{n}{k} p^k (1-p)^{n-k} = 1$
  
  * This follows from the binomial theorem: $(p + (1-p))^n = 1^n = 1$

### Practical Example

Suppose you flip a fair coin $n = 5$ times, where the probability of heads (success) is $p = 0.5$. The probability of getting exactly $k = 3$ heads is:

$P(X = 3) = \\binom{5}{3} (0.5)^3 (0.5)^{5-3} = 10 \\cdot 0.125 \\cdot 0.25 = 0.3125$

This means there's a 31.25% chance of getting exactly 3 heads in 5 coin flips.

The possible outcomes range from $k = 0$ (no heads) to $k = 5$ (all heads), with probabilities determined by the formula above.
  `,
    },
  
    geometric:{
  
      title:`Geometric Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=3) →@`,
     checklist:`     
<h2 style="color: #3b82f6;"> Checklist for Identifying a Geometric Distribution</h2>
✔   Repeating [Bernoulli](!/probability/distributions/discrete#bernoulli) trials independently with constant probability.  
✔   No limit on the number of trials — keep repeating until success.  
✔   $X$ is defined as the total number of trials up to and including the first success.
     `,

     parameters:`
**Parameters of Geometric Distribution **

$𝑝$: probability of success on a single trial, with $0<𝑝≤1$

The geometric distribution models the number of trials needed to get the first success in a sequence of independent Bernoulli trials. 
There's only one parameter — $𝑝$, the chance of success each time — which completely determines the shape of the distribution. 
The outcomes are positive integers: $1,2,3,…$ where each value represents the trial number on which success first occurs.
     `,

     notation:`
     **Notations Used:**

$X \\sim \\text{Geom}(p)$ or $X \\sim \\text{Geometric}(p)$ — **distribution of the random variable**.

$Geom(p)$ — **used to denote the distribution itself (not the random variable)**.

$G(p)$ — **less common shorthand in some texts or software contexts**.

$P(X = k) = (1 - p)^{k - 1} p, \\quad \\text{for } k = 1, 2, 3, \\dots$ — probability mass function

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

     `,
    },
    negative:{
      title:`Negative Binomial Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=4) →@`,
      checklist:`<h2 style="color: #3b82f6;"> Checklist for Identifying a Negative Binomial Distribution</h2>
✔ Repeating the same [Bernoulli](!/probability/distributions/discrete#bernoulli) trial independently.  
✔ Success probability remains constant across trials.  
✔ X is defined as the number of trials until the r-th success (inclusive).`,

notation:`
**Notations Used:**

$X \\sim \\text{NegBin}(r, p)$ or $X \\sim \\text{NB}(r, p)$ — **distribution of the random variable**.

$NegativeBinomial(r, p)$ — **used to denote the distribution itself (not the random variable)**.

$NB(r, p)$ — **common shorthand, especially in statistical software**.

$P(X = k) = \\binom{k - 1}{r - 1} p^r (1 - p)^{k - r}, \\quad \\text{for } k = r, r+1, r+2, \\dots$ — probability mass function (trials until $r$-th success)

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,

parameters:`
**Parameters of Negative Binomial Distribution **

$𝑟$: number of successes to achieve (a positive integer)

$𝑝$: probability of success in each trial, with $0<𝑝≤1$

This distribution models the number of trials needed to observe $𝑟$ successes, assuming each trial is independent and has the same probability $𝑝$ of success. 
The outcomes are integers $𝑟$, $𝑟+1$ ,$𝑟+2$ ,…, since at least $𝑟$ trials are needed. 
$𝑟$ controls the target (how many successes), and $𝑝$ controls the chance of achieving each one — together, they define how spread out or concentrated the distribution is.
`,

// <h2 style="color: #3b82f6;">Checklist for Identifying a Negative Binomial Distribution</h2>
    },


    hypergeometric:{
  
      title:`Hypergeometric Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=5) →@`,
      checklist:`<h2 style="color: #3b82f6;"> Checklist for Identifying a Hypergeometric Distribution</h2>
✔ Sampling is done without replacement from a finite population.  
✔ The population has a fixed number of successes and failures.  
✔ The number of draws is fixed in advance.  
✔ $X$ is defined as the number of successes in the sample.
`,

notation:`
**Notations Used:**

$X \\sim \\text{Hypergeometric}(N, K, n)$ or $X \\sim \\text{Hyp}(N, K, n)$ — **distribution of the random variable**.

$Hypergeometric(N, K, n)$ — **used to denote the distribution itself (not the random variable)**.

$H(N, K, n)$ — **occasionally used in compact form, especially in software or formulas**.

$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}, \\quad \\text{for valid } k$ — probability mass function

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
parameters:`
**Parameters of Hypergeometric Distribution** 

$𝑁$: total population size

$𝐾$: number of successes in the population

$𝑛$: number of draws (without replacement), where $𝑛≤𝑁$

The hypergeometric distribution models the number of successes in $𝑛$ draws from a finite population of size $𝑁$ that contains exactly $𝐾$ successes, without replacement. Unlike the binomial, where each trial is independent, here each draw changes the probabilities — once an item is drawn, it doesn't go back. This dependency is what defines the distribution’s behavior.
`,
    },
  
    poisson:{
  
      title:`Poisson Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=6) →@`,
      checklist:`<h2 style="color: #3b82f6;">Checklist for Identifying a Poisson Distribution</h2>
✔ Events occur independently over time or space.  
✔ Events happen at a constant average rate (λ).  
✔ The probability of more than one event in an infinitesimal interval is negligible.  
✔ $X$ is defined as the number of events in a fixed interval.
`,
notation:`
**Notations Used:**

$X \\sim \\text{Poisson}(\\lambda)$ or $X \\sim \\mathcal{P}(\\lambda)$ — **distribution of the random variable**.

$Poisson(\\lambda)$ — **used to denote the distribution itself (not the random variable)**.

$P(\\lambda)$ — **sometimes used informally, especially in compact notation**.

$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad \\text{for } k = 0, 1, 2, \\dots$ — probability mass function

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
parameters:`
**Parameters of Poisson Distribution** 

$𝜆$: the average rate (mean number of events), with $𝜆>0$
The Poisson distribution models the number of events occurring in a fixed interval of time or space, assuming events happen independently and at a constant average rate $𝜆$. 
It describes counts: 0, 1, 2, ..., with probabilities determined by how large or small $𝜆$ is. 
The single parameter $𝜆$ controls both the mean and the variance of the distribution.
`
    },
  
    bernoulli:{
  
      title:`Bernoulli Trial `,
      content:`
## Understanding the Bernoulli Trial: Two Perspectives

There are **two ways to view a Bernoulli trial**:

1. As a **single experiment**
2. As a **distribution**

In this section, we will focus on the **Bernoulli trial as a concept**, not as a standalone probability distribution. We won’t be analyzing Bernoulli as a separate type of distribution, but rather clarifying how it fits into the broader picture.

###  **Bernoulli Trial** → **Single Experiment**

A **Bernoulli trial** is a **single random experiment** with exactly **two possible outcomes**:

* **Success (1)** with probability ( $p$ )
* **Failure (0)** with probability ( $1 - p$ )

This setup makes it the most basic probabilistic experiment. A classic example is a **single coin flip**, where heads is defined as success. The outcome is binary, and the probabilities are fixed.


`,
      before:`
## Understanding the Bernoulli Trial: Two Perspectives

There are **two ways to view a Bernoulli trial**:

1. As a **single experiment**
2. As a **distribution**

In this section, we will focus on the **Bernoulli trial as a concept**, not as a standalone probability distribution. We won’t be analyzing Bernoulli as a separate type of distribution, but rather clarifying how it fits into the broader picture.

###  **Bernoulli Trial** → **Single Experiment**

A **Bernoulli trial** is a **single random experiment** with exactly **two possible outcomes**:

* **Success (1)** with probability ( $p$ )
* **Failure (0)** with probability ( $1 - p$ )

This setup makes it the most basic probabilistic experiment. A classic example is a **single coin flip**, where heads is defined as success. The outcome is binary, and the probabilities are fixed.
      `,
      after:`
###  Bernoulli Trial as a Building Block for Discrete Distributions Models

What makes the Bernoulli trial so fundamental is that it **forms the core mechanism behind many important discrete probability distributions**. Once you understand the behavior of a single Bernoulli trial, you can extend it to more complex models by simply **repeating the trial under certain rules**.

Here’s how it builds into larger structures:

* [Binomial distribution](!/probability/distributions/discrete#binomial): Repeats the Bernoulli trial ( n ) times independently and counts how many successes occur.
* [Geometric distribution](!/probability/distributions/discrete#geometric): Repeats the trial until the **first success**.
* [Negative binomial distribution](!/probability/distributions/discrete#negative-binomial): Repeats until the **r-th success**.
* Even the [hypergeometric](!/probability/distributions/discrete#hypergeometric) and some **Markov models** borrow the concept of binary outcomes, though with modified assumptions (like dependence or sampling without replacement).

This modularity makes the Bernoulli trial a **conceptual building block** — much like a “unit of randomness” — that helps us understand how randomness scales when we repeat simple actions under defined conditions.

The power of the Bernoulli trial is not in its complexity — it is in its ability to **scale up into powerful probabilistic models** that describe everything from coin tosses to quality control in manufacturing.
      `,
  
    },
  
    decide:{
  
      title:`6 Distribution Types: how to decide`,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
  }


  const introContent = {
  id: "intro",
  title: "**Discrete Distributions**",
  content: `
Discrete distributions are probability models for random variables that can take on a countable set of values—typically integers or a finite set of outcomes. Unlike continuous distributions, which describe phenomena like heights or temperatures that can take any value within a range, discrete distributions characterize scenarios with distinct, separable outcomes: the number of successes in a series of trials, the count of events in a time interval, or selections from a finite population.

Understanding discrete distributions is fundamental to probability theory and problem-solving. Each distribution arises from a specific probabilistic mechanism—whether sampling with or without replacement, counting trials until an event occurs, or modeling rare occurrences. Recognizing these underlying structures allows you to match problems to their appropriate models.

The distinctions matter mathematically.The simplest case—the [discrete uniform distribution](!/probability/distributions/discrete#uniform)—assigns equal probability to each outcome in a finite set, serving as the foundation for understanding more complex models. At the other end, the [negative binomial](!/probability/distributions/discrete#negative-binomial) distribution generalizes the [geometric](!/probability/distributions/discrete#geometric) case by counting trials until a specified number of successes rather than just the first. A [binomial](!/probability/distributions/discrete#binomial) distribution assumes a fixed number of independent trials, while a [geometric](!/probability/distributions/discrete#geometric) distribution counts trials until the first success—superficially similar setups that yield entirely different probability mass functions, moments, and analytical properties. Misidentifying the mechanism leads to incorrect calculations and invalid conclusions.
The [Poisson](!/probability/distributions/discrete#poisson) distribution, meanwhile, models the occurrence of rare events over a continuous interval—time, space, or volume—making it distinct from the trial-based counting distributions.

This page systematically presents six fundamental discrete distributions, detailing their support, parameters, probability functions, and key statistical properties. Mastering these models equips you to tackle a wide range of probabilistic questions with precision and confidence.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/url",
         name: "name"
      },
      uniformTable,
      binomialTable,
      geometricTable,
      negativeBinomialTable,
      hypergeometricTable,
      poissonTable,
      occurenceMatrix,
        
       }
    }
   }

export default function DiscreteDistributionsPage({seoData,sectionsContent , introContent,
      uniformTable,
      binomialTable,
      geometricTable,
      negativeBinomialTable,
      hypergeometricTable,
      poissonTable,
    occurenceMatrix,
  }) {

    
  const genericSections=[
     {
        id:'bernoulli',
        title:sectionsContent.bernoulli.title,
        link:'',
        content:[
          sectionsContent.bernoulli.before,
           <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: distributionsDiagramsData["bernoulli experiment"].svg }} key="table" />,
          sectionsContent.bernoulli.after,
        ]
    },
     {
        id:'decide',
        title:sectionsContent.decide.title,
        link:'',
        content:[
            <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: occurenceMatrix }} key="table" />,
        ]
    },
    {
        id:'uniform',
        title:sectionsContent.uniform.title,
        link:'',
        content:[       
  
   
    <SvgDiagram
     key={'uniform'}
    layout='horizontal'
    data={distributionsDiagramsData['discrete uniform distribution']}
    />,
     <div key={'checklist-uniform'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.uniform.checklist)}
    </div>,
    sectionsContent.uniform.notation,
    sectionsContent.uniform.parameters,
    sectionsContent.uniform.pmf,

            // <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: distributionsDiagramsData["discrete uniform distribution"].svg }} key="table" />,
            <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: uniformTable }} key="table" />,
            sectionsContent.uniform.after,
        ]
    },
    {
        id:'binomial',
        title:sectionsContent.binomial.title,
        link:'',
        content:[
             <SvgDiagram
            key={'binomial'}
    layout='horizontal'
   
    data={distributionsDiagramsData['binomial distribution']}
    />,
      <div key={'checklist-binomial'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.binomial.checklist,)}
    </div>,
    sectionsContent.binomial.notation,
    sectionsContent.binomial.parameters,
    sectionsContent.binomial.pmf,
    
              // <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: distributionsDiagramsData["binomial distribution"].svg }} key="table" />,
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: binomialTable }} key="table" />,
               sectionsContent.binomial.after,
        
            ]    

    },
    {
        id:'geometric',
        title:sectionsContent.geometric.title,
        link:'',
        content:[
            <SvgDiagram
     key={'geometric'}
    layout='horizontal'
    data={distributionsDiagramsData['geometric distribution']}
    />,
    <div key={'checklist-geometric'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.geometric.checklist)}
    </div>,
    sectionsContent.geometric.notation,
    sectionsContent.geometric.parameters,
              // <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: distributionsDiagramsData["geometric distribution"].svg }} key="table" />,
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: geometricTable }} key="table" />,
              sectionsContent.geometric.after,
            ]
    },
    {
        id:'negative-binomial',
        title:sectionsContent.negative.title,
        link:'',
        content:[

           <SvgDiagram
     key={'negative- binomial'}
    layout='horizontal'
    data={distributionsDiagramsData['negative binomial distribution']}
    />,
     <div key={'checklist-negative'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.negative.checklist)}
    </div>,
    sectionsContent.negative.notation,
    sectionsContent.negative.parameters,
   
              // <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html:distributionsDiagramsData["negative binomial distribution"].svg }} key="table" />,
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: negativeBinomialTable }} key="table" />,
               sectionsContent.negative.after,
            ]
    },
    {
        id:'hypergeometric',
        title:sectionsContent.hypergeometric.title,
        link:'',
        content:[

            <SvgDiagram
     key={'hypergeometric'}
    layout='horizontal'
    data={distributionsDiagramsData['hypergeometric distribution']}
    />,
     <div key={'checklist-hypergeometric'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.hypergeometric.checklist)}
    </div>,
    sectionsContent.hypergeometric.notation,
    sectionsContent.hypergeometric.parameters,
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: hypergeometricTable }} key="table" />,
              sectionsContent.hypergeometric.after,
            ]
    },
    {
        id:'poisson',
        title:sectionsContent.poisson.title,
        link:'',
        content:[
           <SvgDiagram
     key={'poisson'}
    layout='horizontal'
    data={distributionsDiagramsData['poisson distribution']}
    />,
      <div key={'checklist-poisson'} style={{backgroundColor:'#f2f2f2', textAlign:'center',padding:'30px',
    borderRadius:'30px',paddingBottom:'50px',display:'flex',alignItems:'flex-start',
    flexDirection:'column',margin:'0 auto',paddingLeft:'200px',fontWeight:'bold',border:'solid 1px #f2f2f2'}}>
   { processContent(sectionsContent.poisson.checklist)}
    </div>,
    sectionsContent.poisson.notation,
    sectionsContent.poisson.parameters,
    
              // <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: distributionsDiagramsData["poisson distribution"].svg }} key="table" />,
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: poissonTable }} key="table" />,
               sectionsContent.poisson.after,
            ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },



]

  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Discrete Distributions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
