// import { Head, Link } from '@inertiajs/react';

// export default function Welcome({ auth }) {
//     return (
//         <>
//             <Head title="Bienvenue" />

//             <div className="bg-gray-50 text-black/90 dark:bg-[#1c1c1c] dark:text-white/90 min-h-screen">
//                 <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
//                     {/* Header */}
//                     <header className="w-full max-w-7xl py-6 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold text-green-500 tracking-wide">OCP Inventory</h1>
//                         <nav className="flex items-center gap-4">
//                             {auth.user ? (
//                                 <Link
//                                     href={route('dashboard')}
//                                     className="text-sm font-medium text-green-500 hover:underline"
//                                 >
//                                     Accéder au tableau de bord
//                                 </Link>
//                             ) : (
//                                 <>
//                                     <Link
//                                         href={route('login')}
//                                         className="text-sm font-medium text-gray-700 hover:text-green-500 dark:text-white/80"
//                                     >
//                                         Se connecter
//                                     </Link>
//                                     <Link
//                                         href={route('register')}
//                                         className="text-sm font-medium text-white bg-green-500 px-4 py-2 rounded shadow hover:bg-green-700 transition"
//                                     >
//                                         S'inscrire
//                                     </Link>
//                                 </>
//                             )}
//                         </nav>
//                     </header>

//                     {/* Hero Section */}
//                     <main className="flex flex-col items-center text-center mt-20">
//                         <h2 className="text-4xl font-extrabold text-dark-500 dark:text-white mb-4">
//                             Bienvenue sur la plateforme OCP
//                         </h2>
//                         <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl">
//                             Gérez facilement vos équipements, suivez les demandes et incidents, et accédez à des outils performants pour la gestion de votre inventaire informatique.
//                         </p>

//                         <div className="mt-8 flex flex-wrap justify-center gap-4">
//                             <Link
//                                 href={auth.user ? route('dashboard') : route('register')}
//                                 className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
//                             >
//                                 {auth.user ? 'Aller au Dashboard' : 'Commencer maintenant'}
//                             </Link>
//                             {!auth.user && (
//                                 <Link
//                                     href={route('login')}
//                                     className="border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-500 px-6 py-3 rounded-lg text-sm font-medium transition"
//                                 >
//                                     Se connecter
//                                 </Link>
//                             )}
//                         </div>
//                     </main>

//                     {/* Footer */}
//                     <footer className="mt-20 text-sm text-center text-gray-400 dark:text-white/50">
//                         &copy; {new Date().getFullYear()} OCP - Tous droits réservés.
//                     </footer>
//                 </div>
//             </div>
//         </>
//     );
// }


import { Head, Link } from '@inertiajs/react';
import OCP from '../../../public/OCP.png';

export default function Home({ auth }) {
  return (
    <>
      <Head title="Bienvenue" />

      <div className="relative bg-white min-h-screen text-black font-sans overflow-hidden">

        {/* Header */}
        <header className="relative w-full px-12 py-8 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <img
              src={OCP}
              alt="Logo OCP"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-lg font-bold tracking-widest text-green-600">INVENTAIRE</h1>
          </div>
          <nav className="flex items-center gap-8 text-sm font-semibold uppercase">
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="text-sm font-medium text-green-500 hover:underline"
              >
                Accéder au tableau de bord
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="text-sm font-medium text-gray-700 hover:text-green-500"
                >
                  Se connecter
                </Link>
                <Link
                  href={route('register')}
                  className="text-sm font-medium text-white bg-green-500 px-4 py-2 rounded shadow hover:bg-green-700 transition"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 -mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-tight">
            Bienvenue dans votre stock informatique
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-xl">
            Gérez efficacement vos équipements et demandes avec notre plateforme intuitive.
          </p>
          <Link
            href={auth.user ? route('dashboard') : route('login')}
            className="mt-8 px-8 py-3 bg-green-600 text-white uppercase tracking-wide font-semibold rounded hover:bg-green-700 transition"
          >
            {auth.user ? 'Tableau de bord' : 'Voir les équipements'}
          </Link>
        </main>

        {/* Vertical Footer Text */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} OCP Inventory. Tous droits réservés.
        </div>
      </div>
    </>
  );
}
