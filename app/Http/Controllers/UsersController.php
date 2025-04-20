<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();

        if ($request->has('id')) {
            $query->where('id', $request->id);
        }

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }


        if ($request->has('role')) {
            $query->where('role', $request->role);
        }

        $users = $query->paginate(10)->onEachSide(1);
        return Inertia::render('User/Index', [
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('statuses'),
        ]);
    }

    public function create()
    {
        return Inertia('User/Create');
    }

    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $data['created_at'] = now();
        $data['updated_at'] = now();
        $data['role'] = $request->role;
        User::create($data);
        return to_route('users.index')->with('success', 'Utilisateur ajouté avec succès.');
    }

    public function show(User $user)
    {
        // return Inertia::render('User/Show', [
        //     'user' => new UserResource($user),
        // ]);
    }

    public function edit(User $user)
    {
        return Inertia('User/Edit', [
            'user' => new UserResource($user),
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $password = $data['password'] ?? null;
        $data['updated_at'] = now();
        if ($password){
            $data['password'] = bcrypt($password);
        }else{
            unset($data['password']);
        }

        $user->update($data);
        return to_route('users.index')
        ->with('success', 'Utilisateur mis à jour.');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return to_route('users.index')
        ->with('success', 'Utilisateur supprimé.');
    }





}
