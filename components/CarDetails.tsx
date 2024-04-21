"use client";

import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "./CarCard";

interface CarDetailsProps extends CarProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child>
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div>{car.class}</div>
        </Transition.Child>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
