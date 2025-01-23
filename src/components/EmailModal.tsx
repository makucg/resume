'use client';

import type { SubmitHandler } from 'react-hook-form';
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// Validación del formulario con Yup
const schema = yup.object({
  name: yup.string().required('Your name is required'),
  email: yup.string().email('Invalid email address').required('Your email is required'),
  message: yup.string().required('Please enter a message'),
});

// Tipos para los valores del formulario
type FormValues = {
  name: string;
  email: string;
  message: string;
};

type EmailModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, closeModal }) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }

      // Mostrar notificación de éxito
      setNotification('Email sent successfully!');
      setNotificationType('success');

      reset(); // Limpia el formulario
      setTimeout(() => {
        setNotification(null); // Oculta la notificación
        closeModal(); // Cierra el modal
      }, 3000); // Tiempo antes de cerrar el modal
    } catch (error) {
      console.error('Error:', error);

      // Mostrar notificación de error
      setNotification('Failed to send email. Please try again later.');
      setNotificationType('error');

      setTimeout(() => {
        setNotification(null); // Oculta la notificación después de un tiempo
      }, 3000);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Send me an email
              </DialogTitle>
              <Description className="my-3 w-full border-b-2 border-green-500 opacity-25">
                Fill out the form below to get in touch.
              </Description>

              {/* Notificaciones */}
              {notification && (
                <div
                  className={`mb-4 rounded-md px-4 py-2 text-sm ${
                    notificationType === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {notification}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Botones */}
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="rounded bg-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EmailModal;
