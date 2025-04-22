import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from '../../../../public/OCP.png';
import { motion } from 'framer-motion';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
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

    return (
        <GuestLayout>
            <Head title="Connexion - OCP Inventaire" />


                <motion.div
                    className="w-full max-w-md space-y-8 p-5 bg-white rounded-xl shadow-2xl border border-gray-100"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="text-center"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={item}>
                            <img
                                src={logo}
                                alt="Logo OCP"
                                className="h-20 w-20 mx-auto mb-6 animate-bounce"
                                style={{ animationDuration: '2s' }}
                            />
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-extrabold text-gray-900"
                            variants={item}
                        >
                            <span className="text-green-600">OCP</span> Inventaire
                        </motion.h2>

                        <motion.p
                            className="mt-2 text-sm text-gray-600"
                            variants={item}
                        >
                            Connectez-vous pour gérer votre inventaire
                        </motion.p>
                    </motion.div>

                    {status && (
                        <motion.div
                            className="mb-4 p-3 text-sm font-medium text-green-700 bg-green-100 rounded-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {status}
                        </motion.div>
                    )}

                    <motion.form
                        onSubmit={submit}
                        className="mt-8 space-y-6"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={item}>
                            <InputLabel
                                htmlFor="email"
                                value="Adresse e-mail"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                                autoComplete="email"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-1 text-sm" />
                        </motion.div>

                        <motion.div variants={item}>
                            <InputLabel
                                htmlFor="password"
                                value="Mot de passe"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-1 text-sm" />
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-between"
                            variants={item}
                        >
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">Se souvenir de moi</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-green-600 hover:text-green-800 hover:underline transition duration-200"
                                >
                                    Mot de passe oublié ?
                                </Link>
                            )}
                        </motion.div>

                        <motion.div variants={item}>
                            <PrimaryButton
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md transition duration-200 transform hover:scale-[1.02]"
                                disabled={processing}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-green-300 group-hover:text-green-200 transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {processing ? 'Connexion en cours...' : 'Se connecter'}
                            </PrimaryButton>
                        </motion.div>
                    </motion.form>

                    <motion.div
                        className="text-center text-sm text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Nouveau sur la plateforme ?{' '}
                        <Link
                            href={route('register')}
                            className="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-200"
                        >
                            Créer un compte
                        </Link>
                    </motion.div>
                    <motion.div
                    className="mt-6 text-center text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href='/home'
                        className="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-200"
                    >
                        ← Retour à la page d'accueil
                    </Link>
                </motion.div>
                </motion.div>

        </GuestLayout>
    );
}