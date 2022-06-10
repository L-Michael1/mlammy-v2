import React, { useState } from "react";
import Hamburger from "hamburger-react";

const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <>I am a mobile navbar!</>;
};

export { MobileNavbar };
