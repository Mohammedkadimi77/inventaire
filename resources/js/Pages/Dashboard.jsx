import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AuthenticatedLayoutUser from '@/Layouts/AuthenticatedLayoutUser';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// KPI Card Component
const KPICard = ({ title, value, borderColor, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(value);
    if (isNaN(target)) return;

    const duration = 1500;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
      className={`bg-white border-l-4 ${borderColor} shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl`}
    >
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">
        {count}
      </p>
    </motion.div>
  );
};

export default function Dashboard({ auth }) {
  const Layout = auth.user.role === 'admin' ? AuthenticatedLayout : AuthenticatedLayoutUser;
  const [kpis] = useState({
    equipment: 152,
    requests: 17,
    tickets: 9,
    users: 38
  });

  return (
    <Layout
      user={auth.user}
      header={
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold leading-tight text-green-500"
        >
          Tableau de bord
        </motion.h2>
      }
    >
      <Head title="Tableau de bord" />

      <div className="py-10 bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* KPI Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <KPICard
              title="Équipements en stock"
              value={kpis.equipment}
              borderColor="border-green-500"
              delay={0}
            />
            <KPICard
              title="Demandes en attente"
              value={kpis.requests}
              borderColor="border-blue-500"
              delay={1}
            />
            <KPICard
              title="Tickets ouverts"
              value={kpis.tickets}
              borderColor="border-yellow-500"
              delay={2}
            />
            <KPICard
              title="Utilisateurs actifs"
              value={kpis.users}
              borderColor="border-red-500"
              delay={3}
            />
          </motion.div>

          {/* Welcome Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500/10 p-3 rounded-lg">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Bienvenue {auth.user.name} !</h4>
                  <p className="mt-1 text-gray-600">
                    Vous êtes connecté en tant que <span className="font-medium text-green-500">{auth.user.role}</span>.
                    Utilisez le menu pour accéder aux différentes fonctionnalités.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dernière connexion: {new Date().toLocaleDateString('fr-FR')}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions (for admin only) */}
          {auth.user.role === 'admin' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">Actions rapides</h3>
                <div className="space-y-3">
                  <Link href={route('equipments.create')} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <span>Ajouter un équipement</span>
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Link>
                  <Link href={route('requests.index')} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <span>Voir les demandes</span>
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href={route('users.index')} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <span>Gérer les utilisateurs</span>
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300 md:col-span-2"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">Activité récente</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500/10 p-2 rounded-full">
                        <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Utilisateur {item}</span> a effectué une action
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Il y a {item} heure{item > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}