import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from '../../../../public/OCP.png';
import { motion } from 'framer-motion';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
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

  const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.2 }
  };

  return (
    <GuestLayout>
      <Head title="Créer un compte - OCP Inventaire" />

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
          className="text-3xl font-bold text-gray-900 mb-2"
          variants={item}
        >
          Créer un <span className="text-green-600">compte</span>
        </motion.h2>

        <motion.p
          className="text-sm text-gray-600 mb-8"
          variants={item}
        >
          Remplissez le formulaire pour créer votre compte
        </motion.p>

        <motion.form
          onSubmit={submit}
          className="space-y-5"
          variants={container}
        >
          <motion.div variants={item}>
            <InputLabel
              htmlFor="name"
              value="Nom complet"
              className="block text-sm font-medium text-gray-700 text-left"
            />
            <TextInput
              id="name"
              name="name"
              value={data.name}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              autoComplete="name"
              isFocused={true}
              onChange={(e) => setData('name', e.target.value)}
              required
              placeholder="Nom complet"
            />
            <InputError message={errors.name} className="mt-1 text-sm text-left" />
          </motion.div>

          <motion.div variants={item}>
            <InputLabel
              htmlFor="email"
              value="Adresse email"
              className="block text-sm font-medium text-gray-700 text-left"
            />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              autoComplete="email"
              onChange={(e) => setData('email', e.target.value)}
              required
              placeholder="fullname@ocp.com"
            />
            <InputError message={errors.email} className="mt-1 text-sm text-left" />
          </motion.div>

          <motion.div variants={item}>
            <InputLabel
              htmlFor="password"
              value="Mot de passe"
              className="block text-sm font-medium text-gray-700 text-left"
            />
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
              required
              placeholder="••••••••"
            />
            <InputError message={errors.password} className="mt-1 text-sm text-left" />
          </motion.div>

          <motion.div variants={item}>
            <InputLabel
              htmlFor="password_confirmation"
              value="Confirmation du mot de passe"
              className="block text-sm font-medium text-gray-700 text-left"
            />
            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
              placeholder="••••••••"
            />
            <InputError message={errors.password_confirmation} className="mt-1 text-sm text-left" />
          </motion.div>

          <motion.div
            className="pt-2"
            variants={item}
          >
            <motion.div
              whileHover={hoverScale}
            >
              <PrimaryButton
                className="w-full justify-center py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-200"
                disabled={processing}
              >
                {processing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Création en cours...
                  </span>
                ) : (
                  "S'inscrire"
                )}
              </PrimaryButton>
            </motion.div>
          </motion.div>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-2">Vous avez déjà un compte ?</p>
          <Link
            href={route('login')}
            className="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-200"
          >
            Se connecter
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