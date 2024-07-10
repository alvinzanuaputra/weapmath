import { BsArrowUpRight } from "react-icons/bs";

type HeaderButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderButton({ section, onClick }: HeaderButtonProps) {
  return (
    <button
      className="flex items-center text-md border-b-2 border-solid border-white border-opacity-0 font-medium text-white hover:border-green-500 focus:text-green-500 focus:green-600 focus:border-green-500 focus:duration-500 transition duration-500"
      onClick={onClick}
    >
      {section}
      <BsArrowUpRight size={20} />
    </button>
  );
}
