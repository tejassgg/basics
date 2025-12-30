import { useState } from "react";
import { FaCopy, FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Dropdown from "../dropdown/page";
import Input from "../input/page";
import Button from "../button/page";

export default function InvitationModal() {
  const linkToShareOptions = [
    { value: 0, label: "Anyone with link" },
    { value: 1, label: "Your organization" },
    { value: 2, label: "Restricted" },
  ];

  const authOptions = [
    { value: 0, label: "Owner" },
    { value: 1, label: "Can Edit" },
    { value: 2, label: "Can View" },
  ];

  const projectMembers = [
    { name: "Tejas Gumgonkar", authOption: 0, email: "tejassgg@gmail.com" },
    { name: "Admin Don", authOption: 1, email: "tejassgg1@gmail.com" },
    { name: "Guppi Bhai", authOption: 2, email: "tejassgg2@gmail.com" },
    { name: "John Doe", authOption: 1, email: "tejassggprojects@gmail.com" },
    { name: "Jahnavi Sharma", authOption: 2, email: "jahnavi0506@gmail.com" },
  ];

  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const toggleInviteModal = () => {
    setInviteModalOpen(!inviteModalOpen);
  };

  return (
    <>
      <Button
        onClick={toggleInviteModal}
        className="text-lg rounded-2xl text-blue-500"
        variant="transparent"
        size="large"
        label="Invite Member"
      />

      {/* AnimatePresence handles the unmounting/closing animation */}
      <AnimatePresence>
        {inviteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Animated Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleInviteModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Animated Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
              className="relative max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-xl w-full flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="header flex items-center justify-between border-b pb-4 border-dashed border-gray-300">
                <div className="flex items-center gap-4">
                  <span className="bg-gray-200 p-4 rounded-full">
                    <FaUserPlus size={22} />
                  </span>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Invite to Project</h1>
                    <h3 className="text-md text-gray-400">
                      Collaborate with members on this project
                    </h3>
                  </div>
                </div>
                <span
                  className="cursor-pointer p-2 rounded-xl hover:bg-gray-100 transition-all"
                  onClick={toggleInviteModal}
                >
                  <FaTimes size={18} />
                </span>
              </div>

              {/* Link Share Section */}
              <div className="link-share bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-300">
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">Link to Share</h1>
                    <h3 className="text-sm text-gray-400">
                      Anyone with this link can access
                    </h3>
                  </div>
                  <Dropdown
                    id="dropdown2"
                    options={linkToShareOptions}
                    value={linkToShareOptions[0].value}
                    buttonClassName="border border-gray-200 rounded-xl p-3 bg-white hover:shadow-md focus:outline-none transition-all"
                    listClassName="max-h-48 rounded-lg"
                    placeholder="Choose an option"
                  />
                </div>
                <div className="flex items-center justify-between mt-4 gap-4">
                  <Input
                    className="bg-white rounded-xl px-4 py-2 w-full text-black text-md focus:outline-none"
                    placeholder="https://link-to-project.com"
                  />
                  <Button
                    className="text-md rounded-2xl text-blue-500 flex items-center"
                    variant="transparent"
                    size="medium"
                  >
                    <FaCopy className="inline mr-2 mb-1" />
                    <span>Copy</span>
                  </Button>
                </div>
              </div>

              {/* Email Section */}
              <div className="email-section">
                <h1 className="text-xl font-bold">Email</h1>
                <div className="flex items-center justify-between mt-4 gap-4">
                  <div className="rounded-xl border border-gray-300 flex items-center gap-2 w-full">
                    <Input
                      className="bg-white rounded-xl px-4 py-2 w-full text-black text-md focus:outline-none"
                      placeholder="abc@example.com"
                    />
                    <Dropdown
                      id="dropdown3"
                      options={linkToShareOptions}
                      value={linkToShareOptions[0].value}
                      buttonClassName="p-3 bg-white border-none mr-2"
                      listClassName="max-h-48 rounded-md"
                      placeholder="Choose an option"
                    />
                  </div>
                  <Button
                    className="text-md text-white bg-black px-6 py-2 rounded-xl whitespace-nowrap"
                    variant="dark"
                    size="medium"
                    label="Send Invite"
                  />
                </div>
              </div>

              {/* Members List */}
              <div className="project-members">
                <h1 className="text-xl font-bold mb-4">Project Members</h1>
                <div className="flex flex-col gap-6">
                  {projectMembers.map((mem, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-gray-200 p-3 rounded-full">
                          <FaUser size={18} />
                        </span>
                        <div className="flex flex-col">
                          <h1 className="text-lg font-medium">{mem.name}</h1>
                          <h3 className="text-sm text-gray-400">{mem.email}</h3>
                        </div>
                      </div>
                      <Dropdown
                        id={"dropdown" + index}
                        options={authOptions}
                        value={mem.authOption}
                        buttonClassName="border border-gray-200 rounded-xl p-3 hover:shadow-md transition-all"
                        listClassName="max-h-48 rounded-md"
                        placeholder="Choose an option"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
