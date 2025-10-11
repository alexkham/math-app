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


export async function getStaticProps(){

  const keyWords=['','','','','']


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






    const sectionsContent={

    uniform:{
      title:`Uniform Discrete Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=1) →@`,
  
  
    },
    binomial:{
      title:`Binomial Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=2) →@`,
  
    },
  
    geometric:{
  
      title:`Geometric Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=3) →@`,
  
    },
    negative:{
      title:`Negative Binomial Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=4) →@`,
  
    },


    hypergeometric:{
  
      title:`Hypergeometric Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=5) →@`,
  
    },
  
    poisson:{
  
      title:`Poisson Distribution`,
      content:``,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use distributions calculator](!/probability/calculator/discrete-distributions?tab=6) →@`,
  
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
  title: "",
  content: ``
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
      poissonTable
        
       }
    }
   }

export default function DiscreteDistributionsPage({seoData,sectionsContent , introContent,
      uniformTable,
      binomialTable,
      geometricTable,
      negativeBinomialTable,
      hypergeometricTable,
      poissonTable}) {

    
  const genericSections=[
    {
        id:'uniform',
        title:sectionsContent.uniform.title,
        link:'',
        content:[
            <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: uniformTable }} key="table" />,
            sectionsContent.uniform.after,
        ]
    },
    {
        id:'binomial',
        title:sectionsContent.binomial.title,
        link:'',
        content:[
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: binomialTable }} key="table" />,
               sectionsContent.binomial.after,
        
            ]    

    },
    {
        id:'geometric',
        title:sectionsContent.geometric.title,
        link:'',
        content:[
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: geometricTable }} key="table" />,
              sectionsContent.geometric.after,
            ]
    },
    {
        id:'negative-binomial',
        title:sectionsContent.negative.title,
        link:'',
        content:[
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: negativeBinomialTable }} key="table" />,
               sectionsContent.negative.after,
            ]
    },
    {
        id:'hypergeometric',
        title:sectionsContent.hypergeometric.title,
        link:'',
        content:[
              <div style={{margin:'auto',width:'100%',transform:'scale(0.85)'}} dangerouslySetInnerHTML={{ __html: hypergeometricTable }} key="table" />,
              sectionsContent.hypergeometric.after,
            ]
    },
    {
        id:'poisson',
        title:sectionsContent.poisson.title,
        link:'',
        content:[
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
          backgroundColor="#f2f2f2"
          textColor="#34383c"
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
