export function Footer (){
    return (
        <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
        <span>
        &copy; {new Date().getFullYear()} Thanawat Maphet. Find me on{" "}
        <a
          href="https://www.linkedin.com/in/thanawat-maphet/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-blue-500 hover:text-white"
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a
          href="https://www.facebook.com/oMewiizo"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-blue-500 hover:text-white"
        >
          Facebook
        </a>
        .
        <br />
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next
        </a>
        .
      </span>
    </footer>
    )
}