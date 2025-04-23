<?php

use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\EquipmentsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\UsersController;
use Database\Factories\EquipmentsFactory;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


Route::redirect('/', '/home');

Route::get('/home', function(){
    return Inertia::render('Home');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $role = Auth::user()->role;

    return redirect()->route($role === 'admin' ? 'admin.dashboard' : 'user.dashboard');
    })->name('dashboard');

    // Dashboard admin
    Route::get('/admin/dashboard', fn () => Inertia::render('Dashboard'))->name('admin.dashboard');

    // Dashboard utilisateur
    Route::get('/user/dashboard', fn () => Inertia::render('Dashboard'))->name('user.dashboard');

    // Autres ressources
    Route::resource('tickets', TicketsController::class);
    Route::resource('equipments', EquipmentsController::class);
    Route::resource('requests', RequestsController::class);
    Route::resource('users', UsersController::class);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::middleware('auth', 'verified')->group(function(){
//     Route::get('/dashboard', fn()=> Inertia::render('Dashboard'))
//     ->name('dashboard');

//     Route::resource('tickets', TicketsController::class);
//     Route::resource('equipments', EquipmentsController::class);
//     Route::resource('requests', RequestsController::class);
//     Route::resource('users', UsersController::class);
// });

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
