// Importation des composants nécessaires et des hooks 
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, Link } from "@inertiajs/react";

// Définition du composant principal pour la page des équipements
export default function Index({ auth, equipments, queryParams = null, success }) {
  // Initialisation de queryParams si non fourni
  queryParams = queryParams || {};

  // Fonction pour gérer les changements dans les champs de recherche
  const searchFieldChanged = (name, value) => {
    if (value) {
      // Met à jour queryParams avec la nouvelle valeur
      queryParams[name] = value;
    } else {
      // Supprime le paramètre si la valeur est vide
      delete queryParams[name];
    }
    // Effectue une requête GET pour mettre à jour la liste des équipements en fonction de queryParams
    router.get(route('equipments.index'), queryParams);
  };

  // Fonction pour gérer les événements de pression de touche dans les champs de recherche
  const onkeypress = (name, e) => {
    if (e.key !== 'Enter') {
      // Met à jour la valeur du champ de recherche lors de la pression d'une touche
      searchFieldChanged(name, e.target.value);
    }
  };

  // Fonction pour gérer la suppression d'un équipement
  const handleDelete = (equipment) => {
    // Confirme la suppression avec l'utilisateur
    if (!window.confirm('Voulez-vous vraiment supprimer cet équipement ?')) {
      return;
    }
    // Effectue une requête DELETE pour supprimer l'équipement
    router.delete(route('equipments.destroy', equipment.id));
  };

  // Rendu du composant
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Equipments</h2>}
    >
      <Head title="Equipments" />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {success && (
          // Affiche un message de succès si disponible
          <div className="bg-green-500 text-white p-4 rounded-md mb-4">
            {success}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <div className="p-4">
            <div className="mb-4 flex flex-col md:flex-row justify-between gap-4 items-center">
              <h3 className="text-lg font-bold">Liste des équipements</h3>
              <Link
                href={route('equipments.create')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
              >
                Ajouter un équipement
              </Link>
            </div>

            <div className="overflow-auto">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left font-medium text-gray-500">Nom</th>
                    <th className="p-2 text-left font-medium text-gray-500">Type</th>
                    <th className="p-2 text-left font-medium text-gray-500">Numéro de série</th>
                    <th className="p-2 text-left font-medium text-gray-500">Statut</th>
                    <th className="p-2 text-left font-medium text-gray-500">Affecté à</th>
                    <th className="p-2 text-left font-medium text-gray-500">Actions</th>
                  </tr>
                  <tr>
                    <th className="px-2 py-1">
                      <TextInput
                        defaultValue={queryParams.name}
                        className="w-full"
                        placeholder="Nom"
                        onChange={(e) => searchFieldChanged('name', e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') searchFieldChanged('name', e.target.value); }}
                      />
                    </th>
                    <th></th>
                    <th className="px-2 py-1">
                      <TextInput
                        defaultValue={queryParams.serial_number}
                        className="w-full"
                        placeholder="S/N"
                        onChange={(e) => searchFieldChanged('serial_number', e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') searchFieldChanged('serial_number', e.target.value); }}
                      />
                    </th>
                    <th className="px-2 py-1">
                      <SelectInput
                        defaultValue={queryParams.status}
                        className="w-full"
                        onChange={(e) => searchFieldChanged('status', e.target.value)}
                      >
                        <option value="">Tous</option>
                        <option value="disponible">Disponible</option>
                        <option value="affecté">Affecté</option>
                        <option value="en_maintenance">En Maintenance</option>
                        <option value="hors_service">Hors Service</option>
                        <option value="stock">Stock</option>
                      </SelectInput>
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {equipments.data.map((equipment) => (
                    <tr key={equipment.id} className="hover:bg-gray-50">
                      <td className="px-2 py-3 whitespace-nowrap">
                        <Link href={route('equipments.show', equipment.id)} className="text-blue-600 hover:underline">
                          {equipment.name}
                        </Link>
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap">{equipment.type}</td>
                      <td className="px-2 py-3 whitespace-nowrap">{equipment.serial_number}</td>
                      <td className="px-2 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          equipment.status === 'disponible' ? 'bg-green-100 text-green-800' :
                          equipment.status === 'affecté' ? 'bg-blue-100 text-blue-800' :
                          equipment.status === 'en_maintenance' ? 'bg-yellow-100 text-yellow-800' :
                          equipment.status === 'hors_service' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {equipment.status}
                        </span>
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap">{equipment.assigned_to || '-'}</td>
                      <td className="px-2 py-3 whitespace-nowrap flex gap-2">
                        <Link
                          href={route('equipments.edit', equipment.id)}
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          Modifier
                        </Link>
                        <button
                          onClick={() => handleDelete(equipment)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <Pagination links={equipments.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}