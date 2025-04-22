import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('password.email'));
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
    hidden: { y: 10, opacity: 0 },
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
      <Head title="Réinitialisation du mot de passe - OCP Inventaire" />

      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-1"
          variants={item}
        >
          Mot de passe oublié ?
        </motion.h2>

        <motion.p
          className="text-sm text-gray-600 mb-8"
          variants={item}
        >
          Entrez votre adresse e-mail pour recevoir un lien de réinitialisation
        </motion.p>

        {status && (
          <motion.div
            className="mb-6 p-3 text-sm font-medium text-green-700 bg-green-100 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.div>
        )}

        <motion.form
          onSubmit={submit}
          className="space-y-6"
          variants={container}
        >
          <motion.div variants={item}>
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              placeholder="Adresse e-mail"
              isFocused={true}
              onChange={(e) => setData('email', e.target.value)}
            />
            <InputError message={errors.email} className="mt-2 text-sm" />
          </motion.div>

          <motion.div variants={item}>
            <PrimaryButton
              className="w-full justify-center py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition duration-200 transform hover:scale-[1.02]"
              disabled={processing}
            >
              {processing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envoyer le lien
                </span>
              )}
            </PrimaryButton>
          </motion.div>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={route('login')}
            className="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-200"
          >
            ← Retour à la page de connexion
          </Link>
        </motion.div>
      </motion.div>
    </GuestLayout>
  );
}