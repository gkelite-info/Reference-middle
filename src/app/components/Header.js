
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter();

    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        router.push('/login')
    }
    const handleRegister = () => {
        router.push('/register');
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href) => pathname === href;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header
                id="header"
                className={`header d-flex align-items-center ${isSticky ? "sticky-header visible" : ""
                    }`}
            >
                <div className="container position-relative d-flex align-items-center">
                    <div className="logo d-flex align-items-center me-auto cursor-pointer" onClick={scrollToTop}>
                        <h1 className="sitename_1 cursor-pointer fw-bold">Lorem Ipsum</h1>
                    </div>

                    <nav id="navmenu" className="navmenu">
                        <ul className="pt-2">
                            <li>
                                <Link href="/" className={isActive("/") ? "active" : ""}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={isActive("/about") ? "active" : ""}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className={isActive("/services") ? "active" : ""}
                                >
                                    Services
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
                                    Blog
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href="/contact"
                                    className={isActive("/contact") ? "active" : ""}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="px-3">
                                <button className="btn btn-primary d-none d-lg-block" onClick={handleLogin}>Login</button>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"
                        ></i>
                    </nav>
                </div>
            </header>

            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">
                                Login
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleLogin();
                                }}
                            >
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;