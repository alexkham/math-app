// class CombinatoricsAPI {
//   static baseUrl = 'https://www.pickjourney.com'
  
//   static endpoints = {
//     'permutation-full': '/combinatorics/permutation-full',
//     'permutation-identical': '/combinatorics/permutation-identical',
//     'permutation-partial': '/combinatorics/permutation-partial',
//     'permutation-with-repetition': '/combinatorics/permutation-with-repetition',
//     'permutation-circular': '/combinatorics/permutation-circular',
//     'combination': '/combinatorics/combination',
//     'partition-into-groups': '/combinatorics/partition-into-groups',
//     'composition-weak': '/combinatorics/composition-weak',
//     'composition-strong': '/combinatorics/composition-strong',
//     'distribution-into-cells': '/combinatorics/distribution-into-cells'
//   }

//   static async calculate(type, params) {
//     try {
//       const endpoint = this.endpoints[type]
//       if (!endpoint) {
//         throw new Error(`Unknown calculation type: ${type}`)
//       }

//       const response = await fetch(`${this.baseUrl}${endpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(params)
//       })

//       if (!response.ok) {
//         throw new Error(`API request failed: ${response.status}`)
//       }

//       const data = await response.json()
//       return data.result
//     } catch (error) {
//       console.error('API calculation error:', error)
//       throw new Error('Calculation failed. Please try again.')
//     }
//   }
// }

// export default CombinatoricsAPI


class CombinatoricsAPI {
  static baseUrl = 'https://www.pickjourney.com'
  
  static endpoints = {
    'permutation-full': '/combinatorics/permutation-full',
    'permutation-identical': '/combinatorics/permutation-identical',
    'permutation-partial': '/combinatorics/permutation-partial',
    'permutation-with-repetition': '/combinatorics/permutation-with-repetition',
    'permutation-circular': '/combinatorics/permutation-circular',
    'combination': '/combinatorics/combination',
    'partition-into-groups': '/combinatorics/partition-into-groups',
    'composition-weak': '/combinatorics/composition-weak',
    'composition-strong': '/combinatorics/composition-strong',
    'distribution-into-cells': '/combinatorics/distribution-into-cells'
  }

  static async calculate(type, params) {
    try {
      const endpoint = this.endpoints[type]
      if (!endpoint) {
        throw new Error(`Unknown calculation type: ${type}`)
      }

      console.log('Making API request to:', `${this.baseUrl}${endpoint}`)
      console.log('Request params:', params)

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      console.log('API response data:', data)
      return data.result
    } catch (error) {
      console.error('API calculation error:', error)
      throw new Error('Calculation failed. Please try again.')
    }
  }
}

export default CombinatoricsAPI