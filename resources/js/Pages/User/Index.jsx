import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, Link } from "@inertiajs/react";

export default function Index({ auth, users, queryParams = null, success }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route('users.index'), queryParams)
  };

  const onkeypress = (name, e) => {
    if (e.key !== 'Enter') {
      searchFieldChanged(name, e.target.value);
    }
  };

  const handleDelete = (user) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      return;
    }
    router.delete(route('users.destroy', user.id));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
    >
      <Head title="Users" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">


          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="mb-4 flex justify-end">
                <Link href={route('users.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ajouter un utilisateur
                </Link>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>


                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <TextInput
                        defaultValue={queryParams.id}
                        className="w-full"
                        placeholder="Id"
                        onChange={(e) => searchFieldChanged('id', e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            searchFieldChanged('id', e.target.value);
                          }
                        }}
                      />

                    </th>
                    <th scope="col" className="px-6 py-3">
                      <TextInput
                        defaultValue={queryParams.name}
                        className="w-full"
                        placeholder="Nom"
                        onChange={(e) => searchFieldChanged('name', e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            searchFieldChanged('name', e.target.value);
                          }
                        }}
                      />
                    </th>
                    <th scope="col" className="px-6 py-3 ">

                    </th>

                    <th scope="col" className="px-6 py-3">
                      <SelectInput
                        defaultValue={queryParams.role}
                        className="w-full"
                        onChange={(e) => searchFieldChanged('role', e.target.value)}
                      >
                        <option value="">Tous</option>
                        <option value="admin">Admin</option>
                        <option value="user">Utilisateur</option>
                      </SelectInput>
                    </th>

                    <th scope="col" className="px-6 py-3">

                    </th>
                  </tr>
                </thead>


                <tbody className="bg-white divide-y divide-gray-200">
                  {users.data.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 text-nowrap ">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${user.role === 'admin' ? 'bg-green-100 text-green-800' :
                            user.role === 'agent' ? 'bg-blue-100 text-blue-800' :
                              user.role === 'technicien' ? 'bg-yellow-100 text-yellow-800' :
                                user.role === 'utilisateur' ? 'bg-red-100 text-red-800' :
                                  'bg-gray-100 text-gray-800'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={route('users.edit', user.id)} className="text-indigo-600 hover:text-indigo-900 mr-3">
                          Modifier
                        </Link>
                        <button onClick={(e) => handleDelete(user)} className="text-red-600 hover:text-red-900">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
