import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-ocp-green">
                    Tableau de bord
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10 bg-gray-50 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {/* KPI Cards */}
                        <div className="bg-white border-l-4 border-ocp-green shadow-md rounded-lg p-4">
                            <h3 className="text-sm text-gray-500 uppercase">Équipements en stock</h3>
                            <p className="mt-2 text-2xl font-bold text-ocp-dark">152</p>
                        </div>
                        <div className="bg-white border-l-4 border-ocp-blue shadow-md rounded-lg p-4">
                            <h3 className="text-sm text-gray-500 uppercase">Demandes en attente</h3>
                            <p className="mt-2 text-2xl font-bold text-ocp-dark">17</p>
                        </div>
                        <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-lg p-4">
                            <h3 className="text-sm text-gray-500 uppercase">Tickets ouverts</h3>
                            <p className="mt-2 text-2xl font-bold text-ocp-dark">9</p>
                        </div>
                        <div className="bg-white border-l-4 border-red-500 shadow-md rounded-lg p-4">
                            <h3 className="text-sm text-gray-500 uppercase">Utilisateurs actifs</h3>
                            <p className="mt-2 text-2xl font-bold text-ocp-dark">38</p>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-ocp-dark mb-4">Bienvenue dans le portail de gestion OCP</h4>
                        <p className="text-gray-600">
                            Vous êtes connecté en tant qu'utilisateur autorisé. Utilisez le menu de gauche pour accéder aux modules de gestion des équipements, des demandes et des tickets.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

