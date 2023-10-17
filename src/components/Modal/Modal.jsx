import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import MainButton from "../MainButton/MainButton";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ product, isOpen, setIsOpen }) => {
  const { _id, img, name, price, description, category, tags } = product;

  function closeModal() {
    setIsOpen(false);
  }

  const handleToast = (name) => {
    closeModal();
    toast(`${name} added to your cart`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-gray-900"
                  >
                    {name}
                  </Dialog.Title>
                  <div className="mt-2 flex items-center">
                    <img className="w-40" src={img}></img>
                    <div className="ml-2">
                      <p className="text-md mb-4 text-gray-500">
                        {description}
                      </p>

                      <Link
                        className="outline-none"
                        onClick={closeModal}
                        to={`/details/${_id}`}
                      >
                        <MainButton text="View details"></MainButton>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-black font-semibold text-xl">
                      Price: ${price}
                    </p>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#e6005c] px-4 py-2 text-sm font-medium text-white hover:bg-[#e6005c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6005c] focus-visible:ring-offset-2"
                      onClick={() => handleToast(name)}
                    >
                      Add to cart
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
