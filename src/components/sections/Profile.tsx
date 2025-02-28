'use client';

import { siteConfig } from '@/config/site';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import EmailModal from '../EmailModal';
import TrackedButton from '../TrackedButton';

const ProfileCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="Profile" className="grid min-h-screen place-items-center">
      <div className="relative mx-auto flex h-auto max-w-4xl flex-wrap items-center">

        <div className="relative z-20 mx-2 w-full sm:mx-6 lg:hidden">
          <Image
            src="/assets/img/profile.jpeg"
            className="mx-auto size-3/5 translate-y-2 rounded shadow-2xl md:translate-y-4 lg:hidden"
            alt="Profile"
            width={500}
            height={500}
          />
        </div>

        <div className="z-10 mx-2 w-full rounded-lg bg-white opacity-75 shadow-2xl sm:mx-6 lg:mx-0 lg:w-3/5">

          <div className="p-4 text-center md:p-12 lg:text-left">

            <h1 className="pt-8 text-3xl font-bold lg:pt-0">Diego Montes Novio</h1>
            <div className="mx-auto w-4/5 border-b-2 border-green-500 pt-3 opacity-25 lg:mx-0"></div>
            <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
              <svg className="h-4 fill-current pr-4 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" /></svg>
              {' '}
              Developer
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:justify-start lg:text-sm">
              <svg className="h-4 fill-current pr-4 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" /></svg>
              {' '}
              Santiago de Compostela
            </p>
            <p className="pt-8 text-sm">Java backend developer trying to understand the world...</p>
            <p className="pt-2 text-sm">I am a software developer with over 10 years of experience in the IT sector, mainly focused on backend development with some experience in frontend. I am passionate about technology, enjoy working in collaborative environments, learning new things, and taking on challenges to keep improving my skills and knowledge.</p>
            {/* List languagues in 2 columns  */}
            <div className="flex flex-col items-start gap-2 pt-4 text-sm">
              <span className="before:mr-2 before:content-['•']">Spanish (native)</span>
              <span className="before:mr-2 before:content-['•']">Galician (native)</span>
              <span className="before:mr-2 before:content-['•']">English (intermediate)</span>
              <span className="before:mr-2 before:content-['•']">French (intermediate)</span>
            </div>

            <div className="flex justify-center pb-8 pt-12">
              <TrackedButton
                eventName="get_in_touch"
                className="rounded bg-green-700 px-4 py-2 font-bold text-white data-[hover]:bg-green-900"
                type="button"
                onClick={openModal}
              >
                Get In Touch
              </TrackedButton>
              <Menu>
                <MenuButton className="ml-4 inline-flex items-center gap-2 rounded-md bg-blue-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-900 data-[open]:bg-blue-800 data-[focus]:outline-1 data-[focus]:outline-white">
                  Download CV
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="z-30 origin-top-right rounded border border-white/5 bg-gray-600 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[open]:scale-100 data-[closed]:opacity-0 data-[open]:opacity-90"
                >
                  <MenuItem>
                    <TrackedButton
                      eventName="download_cv_en"
                      type="button"
                      className="group flex w-full items-center gap-2 rounded px-3 py-1.5 data-[focus]:bg-white/10"
                      onClick={() => window.open('/assets/docs/Diego_Montes_Novio_CV.pdf', '_blank')}
                    >
                      English (EN)
                    </TrackedButton>
                  </MenuItem>
                  <div className="my-1 h-px bg-white/5" />
                  <MenuItem>
                    <TrackedButton
                      eventName="download_cv_es"
                      type="button"
                      className="group flex w-full items-center gap-2 rounded px-3 py-1.5 data-[focus]:bg-white/10"
                      onClick={() => window.open('/assets/docs/Diego_Montes_Novio_CV_ES.pdf', '_blank')}
                    >
                      Spanish (ES)
                    </TrackedButton>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            <div className="mx-auto mt-6 flex w-4/5 flex-wrap items-center justify-center space-x-2 pb-16 lg:w-full lg:pb-0">
              <a href={`${siteConfig.links.github}`} data-tippy-content="@github_handle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <Link href={`${siteConfig.links.linkedin}`} data-tippy-content="@linkedin_handle" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank" passHref>
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452H16.89v-5.554c0-1.323-.025-3.03-1.846-3.03-1.848 0-2.13 1.445-2.13 2.939v5.645h-3.554V9h3.415v1.561h.049c.476-.9 1.637-1.846 3.367-1.846 3.598 0 4.264 2.367 4.264 5.444v6.293zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zM6.87 20.452H3.804V9h3.066v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.731v20.538C0 23.225.792 24 1.771 24h20.451c.978 0 1.778-.775 1.778-1.731V1.731C24 .775 23.203 0 22.225 0z" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

        <div className="relative z-20 w-full lg:w-2/5">
          <Image src="/assets/img/profile.jpeg" className="hidden -translate-x-2 rounded-none shadow-2xl lg:block lg:rounded xl:scale-125" alt="Profile" width={500} height={500} />
        </div>
      </div>

      {/* Modal */}
      <EmailModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
};

export default ProfileCard;
