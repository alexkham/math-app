

export const vectorThemes = {
   
    classicLight: {
        background: "white",
        labelColor:"black",
        borderColor: "rgb(229, 231, 235)", // gray-200
        gridColor: "rgb(243, 244, 246)", // gray-100
        axisColor: "rgb(156, 163, 175)", // gray-400
        vectorColor: "rgb(59, 130, 246)" // blue-500
      },
    
      darkModern: {
        background: "rgb(17, 24, 39)", // gray-900
        labelColor:"white",
        borderColor: "rgb(55, 65, 81)", // gray-700
        gridColor: "rgb(31, 41, 55)", // gray-800
        axisColor: "rgb(75, 85, 99)", // gray-600
        vectorColor: "rgb(34, 211, 238)" // cyan-400
      },
    
      purplePastel: {
        background: "rgb(250, 245, 255)", // purple-50
        labelColor:"black",
        borderColor: "rgb(233, 213, 255)", // purple-200
        gridColor: "rgb(243, 232, 255)", // purple-100
        axisColor: "rgb(192, 132, 252)", // purple-400
        vectorColor: "rgb(168, 85, 247)" // purple-500
      },
    
      oceanTheme: {
        background: "rgb(22, 78, 99)", // cyan-900
        labelColor:"black",
        borderColor: "rgb(14, 116, 144)", // cyan-700
        gridColor: "rgb(21, 94, 117)", // cyan-800
        axisColor: "rgb(6, 182, 212)", // cyan-500
        vectorColor: "rgb(94, 234, 212)" // teal-300
      },
    
      mintTheme: {
        background: "rgb(236, 253, 245)", // emerald-50
        labelColor:"black",
        borderColor: "rgb(167, 243, 208)", // emerald-200
        gridColor: "rgb(209, 250, 229)", // emerald-100
        axisColor: "rgb(52, 211, 153)", // emerald-400
        vectorColor: "rgb(16, 185, 129)" // emerald-500
      },
    
      highContrast: {
        background: "black",
        labelColor:"black",
        borderColor: "rgb(234, 179, 8)", // yellow-500
        gridColor: "rgb(31, 41, 55)", // gray-800
        axisColor: "rgb(234, 179, 8)", // yellow-500
        vectorColor: "rgb(250, 204, 21)" // yellow-400
      },

      matrix: {
        background: "black", // bg-black
        labelColor:"black",
        borderColor: "rgb(21, 128, 61)", // green-700
        gridColor: "rgb(20, 83, 45)", // green-900
        axisColor: "rgb(34, 197, 94)", // green-500
        vectorColor: "rgb(134, 239, 172)", // green-300
        vectorShadow: "0 0 15px rgba(34,197,94,0.5)"
      },
    
      sunset: {
        background: {
          type: "gradient",
          
          from: "rgb(255, 247, 237)", // from-orange-100
          to: "rgb(255, 241, 242)", // to-rose-100
          direction: "br"
        },
        borderColor: "rgb(253, 186, 116)", // orange-300
        labelColor:"black",
        gridColor: "rgb(254, 215, 170)", // orange-200
        axisColor: "rgb(251, 146, 60)", // orange-400
        vectorColor: "rgb(244, 63, 94)" // bg-rose-500
      },
    
      space: {
        background: "rgb(2, 6, 23)", // bg-slate-950
        labelColor:"black",
        borderColor: "rgb(55, 48, 163)", // indigo-800
        gridColor: "rgb(49, 46, 129)", // indigo-900
        axisColor: "rgb(99, 102, 241)", // indigo-500
        vectorColor: "rgb(167, 139, 250)", // bg-violet-400
        vectorShadow: "0 0 15px rgba(167,139,250,0.5)"
      },
    
      arctic: {
        background: "rgb(239, 246, 255)", // blue-50 to cyan-50 gradient
        labelColor:"black",
        borderColor: "rgb(191, 219, 254)", // blue-200
        gridColor: "rgb(219, 234, 254)", // blue-100
        axisColor: "rgb(147, 197, 253)", // blue-300
        vectorColor: "rgb(6, 182, 212)" // cyan-500
    },
    
      neon: {
        background: "rgb(9, 9, 11)", // bg-zinc-950
        labelColor:"black",
        borderColor: "rgb(190, 24, 93)", // pink-700
        gridColor: "rgb(39, 39, 42)", // zinc-800
        axisColor: "rgb(219, 39, 119)", // pink-600
        vectorColor: "rgb(244, 114, 182)", // bg-pink-400
        vectorShadow: "0 0 15px rgba(236,72,153,0.5)"
      },
    
      desert: {
        background: "rgb(255, 251, 235)", // bg-amber-50
        labelColor:"black",
        borderColor: "rgb(253, 230, 138)", // amber-200
        gridColor: "rgb(254, 243, 199)", // amber-100
        axisColor: "rgb(251, 191, 36)", // amber-400
        vectorColor: "rgb(217, 119, 6)" // bg-amber-600
      },
      cyberpunk: {
        background: "rgb(76, 29, 149)", // violet-950 with gradient to fuchsia-950
        labelColor:"black",
        borderColor: "rgb(109, 40, 217)", // violet-700
        gridColor: "rgba(107, 33, 168, 0.5)", // violet-800/50
        axisColor: "rgb(250, 204, 21)", // yellow-400
        vectorColor: "rgb(253, 224, 71)", // yellow-300
        vectorShadow: "0 0 15px rgba(250,204,21,0.5)"
    },
    
    retroWave: {
        background: "rgb(88, 28, 135)", // pink-950 gradient via purple-950 to indigo-950
        labelColor:"black",
        borderColor: "rgb(190, 24, 93)", // pink-700
        gridColor: "rgba(157, 23, 77, 0.3)", // pink-800/30
        axisColor: "rgb(34, 211, 238)", // cyan-400
        vectorColor: "rgb(103, 232, 249)", // cyan-300
        vectorShadow: "0 0 15px rgba(34,211,238,0.5)"
    },
    
    forest: {
        background: "rgb(20, 83, 45)", // green-900 gradient to emerald-900
        labelColor:"black",
        borderColor: "rgb(22, 163, 74)", // green-600
        gridColor: "rgba(22, 101, 52, 0.5)", // green-800/50
        axisColor: "rgb(52, 211, 153)", // emerald-400
        vectorColor: "rgb(110, 231, 183)" // emerald-300
    },
    
    monochrome: {
        background: "rgb(245, 245, 245)", // neutral-100
        labelColor:"black",
        borderColor: "rgb(212, 212, 212)", // neutral-300
        gridColor: "rgb(229, 229, 229)", // neutral-200
        axisColor: "rgb(82, 82, 82)", // neutral-600
        vectorColor: "rgb(38, 38, 38)" // neutral-800
    },
    
    volcano: {
        background: "rgb(69, 10, 10)", // red-950 gradient to orange-900
        labelColor:"black",
        borderColor: "rgb(185, 28, 28)", // red-700
        gridColor: "rgba(153, 27, 27, 0.5)", // red-800/50
        axisColor: "rgb(251, 146, 60)", // orange-400
        vectorColor: "rgb(253, 186, 116)", // orange-300
        vectorShadow: "0 0 15px rgba(253,186,116,0.5)"
    },
    
    frost: {
        background: "rgb(255, 255, 255)", // white gradient to sky-50
        labelColor:"black",
        borderColor: "rgb(186, 230, 253)", // sky-200
        gridColor: "rgb(224, 242, 254)", // sky-100
        axisColor: "rgb(56, 189, 248)", // sky-400
        vectorColor: "rgb(14, 165, 233)" // sky-500
    }
  };
  
  export default vectorThemes;