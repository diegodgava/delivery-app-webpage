import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

function Header() {
  return (
    <div className="flex justify-center fixed left-0 right-0">
      <div className="flex space-x-4 mt-5">
        <a href="https://github.com/diegodgava" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub className="text-black w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/diego-gava-" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-black w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default Header;
