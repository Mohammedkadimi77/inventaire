// // import { Head, Link } from '@inertiajs/react';

// // export default function Welcome({ auth }) {
// //     return (
// //         <>
// //             <Head title="Bienvenue" />

// //             <div className="bg-gray-50 text-black/90 dark:bg-[#1c1c1c] dark:text-white/90 min-h-screen">
// //                 <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
// //                     {/* Header */}
// //                     <header className="w-full max-w-7xl py-6 flex justify-between items-center">
// //                         <h1 className="text-2xl font-bold text-green-500 tracking-wide">OCP Inventory</h1>
// //                         <nav className="flex items-center gap-4">
// //                             {auth.user ? (
// //                                 <Link
// //                                     href={route('dashboard')}
// //                                     className="text-sm font-medium text-green-500 hover:underline"
// //                                 >
// //                                     Accéder au tableau de bord
// //                                 </Link>
// //                             ) : (
// //                                 <>
// //                                     <Link
// //                                         href={route('login')}
// //                                         className="text-sm font-medium text-gray-700 hover:text-green-500 dark:text-white/80"
// //                                     >
// //                                         Se connecter
// //                                     </Link>
// //                                     <Link
// //                                         href={route('register')}
// //                                         className="text-sm font-medium text-white bg-green-500 px-4 py-2 rounded shadow hover:bg-green-700 transition"
// //                                     >
// //                                         S'inscrire
// //                                     </Link>
// //                                 </>
// //                             )}
// //                         </nav>
// //                     </header>

// //                     {/* Hero Section */}
// //                     <main className="flex flex-col items-center text-center mt-20">
// //                         <h2 className="text-4xl font-extrabold text-dark-500 dark:text-white mb-4">
// //                             Bienvenue sur la plateforme OCP
// //                         </h2>
// //                         <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl">
// //                             Gérez facilement vos équipements, suivez les demandes et incidents, et accédez à des outils performants pour la gestion de votre inventaire informatique.
// //                         </p>

// //                         <div className="mt-8 flex flex-wrap justify-center gap-4">
// //                             <Link
// //                                 href={auth.user ? route('dashboard') : route('register')}
// //                                 className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
// //                             >
// //                                 {auth.user ? 'Aller au Dashboard' : 'Commencer maintenant'}
// //                             </Link>
// //                             {!auth.user && (
// //                                 <Link
// //                                     href={route('login')}
// //                                     className="border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-500 px-6 py-3 rounded-lg text-sm font-medium transition"
// //                                 >
// //                                     Se connecter
// //                                 </Link>
// //                             )}
// //                         </div>
// //                     </main>

// //                     {/* Footer */}
// //                     <footer className="mt-20 text-sm text-center text-gray-400 dark:text-white/50">
// //                         &copy; {new Date().getFullYear()} OCP - Tous droits réservés.
// //                     </footer>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }


// import { Head, Link } from '@inertiajs/react';
// import OCP from '../../../public/OCP.png';

// export default function Home({ auth }) {
//   return (
//     <>
//       <Head title="Bienvenue" />

//       <div className="relative bg-white min-h-screen text-black font-sans overflow-hidden">

//         {/* Header */}
//         <header className="relative w-full px-12 py-8 flex justify-between items-center z-20">
//           <div className="flex items-center gap-3">
//             <img
//               src={OCP}
//               alt="Logo OCP"
//               className="w-10 h-10 object-contain"
//             />
//             <h1 className="text-lg font-bold tracking-widest text-green-600">INVENTAIRE</h1>
//           </div>
//           <nav className="flex items-center gap-8 text-sm font-semibold uppercase">
//             {auth.user ? (
//               <Link
//                 href={route('dashboard')}
//                 className="text-sm font-medium text-green-500 hover:underline"
//               >
//                 Accéder au tableau de bord
//               </Link>
//             ) : (
//               <>
//                 <Link
//                   href={route('login')}
//                   className="text-sm font-medium text-gray-700 hover:text-green-500"
//                 >
//                   Se connecter
//                 </Link>
//                 <Link
//                   href={route('register')}
//                   className="text-sm font-medium text-white bg-green-500 px-4 py-2 rounded shadow hover:bg-green-700 transition"
//                 >
//                   S'inscrire
//                 </Link>
//               </>
//             )}
//           </nav>
//         </header>

//         {/* Hero Content */}
//         <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 -mt-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-tight">
//             Bienvenue dans votre stock informatique
//           </h2>
//           <p className="text-lg mt-4 text-gray-600 max-w-xl">
//             Gérez efficacement vos équipements et demandes avec notre plateforme intuitive.
//           </p>
//           <Link
//             href={auth.user ? route('dashboard') : route('login')}
//             className="mt-8 px-8 py-3 bg-green-600 text-white uppercase tracking-wide font-semibold rounded hover:bg-green-700 transition"
//           >
//             {auth.user ? 'Tableau de bord' : 'Voir les équipements'}
//           </Link>
//         </main>

//         {/* Vertical Footer Text */}
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-xs text-gray-400">
//           &copy; {new Date().getFullYear()} OCP Inventory. Tous droits réservés.
//         </div>
//       </div>
//     </>
//   );
// }


import { Head, Link } from '@inertiajs/react';
import OCP from '../../../public/OCP.png';
import { motion } from 'framer-motion';

export default function Home({ auth }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <>
      <Head title="Bienvenue" />

      <div className="relative bg-gradient-to-br from-white to-gray-50 min-h-screen text-gray-900 font-sans overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 -left-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-60 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        </motion.div>

        {/* Header */}
        <motion.header
          className="relative w-full px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center z-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={OCP}
              alt="Logo OCP"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-lg font-bold tracking-widest text-green-600">INVENTAIRE</h1>
          </motion.div>

          <nav className="flex items-center gap-4 sm:gap-8 text-sm font-semibold uppercase">
            {auth.user ? (
              <motion.div
                whileHover={hoverScale}
              >
                <Link
                  href={route('dashboard')}
                  className="relative px-4 py-2 text-green-600 group"
                >
                  Tableau de bord
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={hoverScale}
                >
                  <Link
                    href={route('login')}
                    className="relative px-4 py-2 text-gray-700 hover:text-green-600 group"
                  >
                    Se connecter
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={hoverScale}
                >
                  <Link
                    href={route('register')}
                    className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-all duration-300 transform hover:shadow-lg"
                  >
                    S'inscrire
                  </Link>
                </motion.div>
              </>
            )}
          </nav>
        </motion.header>

        {/* Hero Content */}
        <motion.main
          className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Gestion <span className="text-green-600">intelligente</span> de votre inventaire
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mt-6 text-gray-600 max-w-2xl"
            variants={itemVariants}
          >
            Optimisez la gestion de votre parc informatique avec une plateforme moderne et intuitive.
          </motion.p>

          <motion.div
            className="mt-10"
            variants={itemVariants}
          >
            <Link
              href={auth.user ? route('dashboard') : route('login')}
              className="relative px-10 py-4 bg-green-600 text-white uppercase tracking-wider font-semibold rounded-md shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {auth.user ? 'Accéder au dashboard' : 'Commencer maintenant'}
              <span className="absolute inset-0 border-2 border-transparent hover:border-white rounded-md transition-all duration-300 pointer-events-none"></span>
            </Link>
          </motion.div>

          {!auth.user && (
            <motion.p
              className="mt-6 text-sm text-gray-500"
              variants={itemVariants}
            >
              Vous avez déjà un compte?{' '}
              <Link href={route('login')} className="text-green-600 hover:underline font-medium">
                Connectez-vous
              </Link>
            </motion.p>
          )}
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="relative z-10 py-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} OCP Inventory. Tous droits réservés.</p>
          </div>
        </motion.footer>
      </div>
    </>
  );
}
