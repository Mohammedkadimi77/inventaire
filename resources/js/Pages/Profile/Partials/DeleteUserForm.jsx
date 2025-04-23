import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-xl font-semibold text-gray-900">
                    Supprimer le compte
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                    Une fois votre compte supprimé, toutes ses ressources et données seront définitivement perdues. Avant de continuer, assurez-vous d’avoir récupéré toute information importante.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Supprimer le compte
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Êtes-vous sûr de vouloir supprimer votre compte ?
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        Cette action est irréversible. Veuillez entrer votre mot de passe pour confirmer.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Mot de passe" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full"
                            isFocused
                            placeholder="Mot de passe"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <SecondaryButton onClick={closeModal}>
                            Annuler
                        </SecondaryButton>

                        <DangerButton disabled={processing}>
                            Confirmer la suppression
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
