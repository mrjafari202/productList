import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import CreateProductForm from "./CreateProductForm";
import EditeProductForm from "./EditeProductForm";

export default function EditeProductModal({ isOpen, setIsOpen }) {
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        {/* Backdrop with blur effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-matn/10 backdrop-filter backdrop-blur-md"
                        />
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <DialogPanel
                                as={motion.div}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="  
                                w-full max-w-md bg-white rounded-xl overflow-hidden shadow-sm  
                                "
                            >

                                <header className="p-4 flex justify-center">
                                    <p className="title-large ">ویرایش اطلاعات</p>
                                </header>
                                <div className="  
                                max-h-[calc(100vh-6rem)]  
                                overflow-y-auto  
                                ">

                                    <EditeProductForm />
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
}