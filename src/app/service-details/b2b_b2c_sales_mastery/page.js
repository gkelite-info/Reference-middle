'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Briefcase, Users, Target, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "Lorem_Ipsum",
    icon: <Briefcase size={40} className="text-primary" />,
    points: [
      "Lead Qualification & Prospecting – identify decision-makers & high-value prospects.",
      "Consultative Selling Approach – tailor solutions instead of hard selling.",
      "Account-Based Marketing (ABM) – target specific companies with personalized campaigns.",
      "Value-Driven Pitch – highlight ROI, efficiency & long-term benefits.",
      "Multi-Channel Outreach – LinkedIn, email, events & referrals.",
      "Negotiation & Long-Term Contracts – build trust with effective deals."
    ],
  },
  {
    title: "Lorem_Ipsum",
    icon: <Users size={40} className="text-success" />,
    points: [
      "Personalized Customer Experience – data-driven recommendations & offers.",
      "Social Proof & Reviews – influencers, testimonials & user content.",
      "Omnichannel Selling – seamless shopping across web, social & retail.",
      "Limited-Time Offers & Discounts – flash sales & seasonal promos.",
      "Upselling & Cross-Selling – suggest complementary products."
    ],
  },
  {
    title: "Lorem_Ipsum",
    icon: <Target size={40} className="text-warning" />,
    points: [
      "B2B: Content marketing, LinkedIn outreach, events & whitepapers.",
      "B2C: Social ads, influencer marketing, referral programs & viral campaigns.",
      "Lead Nurturing: Automated email sequences, case studies, webinars & retargeting campaigns."
    ],
  },
  {
    title: "Lorem_Ipsum",
    icon: <TrendingUp size={40} className="text-info" />,
    points: [
      "B2B: Solution selling, objection handling, ROI-focused proposals.",
      "B2C: Scarcity tactics, emotional triggers, instant gratification with fast delivery.",
      "Follow-Up Strategy: Check-ins & customized proposals to maintain engagement."
    ],
  }
];

const page = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <main className="main">
      <div className="page-title accent-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Service Details</h1>
        </div>
      </div>

      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-0 px-3 px-lg-0">

            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/assets/img/hero-carousel/b2b.jpg"
                alt="B2B & B2C Sales Mastery"
                title="B2B & B2C Sales Mastery"
                className="img-fluid services-img"
                width={600}
                height={400}
              />
            </div>

            <div className="col-lg-5 h-25 d-none d-lg-block" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                <Link href="/service-details/ai_services">Lorem_1</Link>
                <Link href="/service-details/dynamic_Digital_marketing_solutions">Lorem_2</Link>
                <Link href="/service-details/b2b_b2c_sales_mastery" className="active">Lorem_3</Link>
                <Link href="/service-details/bpo_services">Lorem_4</Link>
                <Link href="/service-details/hr_consultancy">Lorem_5</Link>
              </div>
              <h4>Lorem_Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <section className="py-5 text-center">
              <h1 className="display-4 fw-bold">Lorem_Ipsum</h1>
              <p className="lead mt-3 mx-auto w-75 text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </section>

            <section className="container py-5">
              <div className="row g-4">
                {services.map((service, index) => (
                  <div className="col-md-6 py-2" key={index}>
                    <div className="card shadow-sm h-100 border-0 rounded-5">
                      <div className="card-body shadow-lg rounded-5">
                        <div className="mb-3">{service.icon}</div>
                        <h5 className="card-title fw-semibold">{service.title}</h5>
                        <ul className="list-unstyled mt-3">
                          {service.points.map((point, i) => (
                            <li key={i} className="mb-2 d-flex align-items-start">
                              <span className="me-2 text-secondary">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-light py-5 text-center">
              <h2 className="fw-bold">Lorem_Ipsum</h2>
              <p className="text-muted mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <a
                href="/contact"
                className="custom-contact-btn btn btn-primary btn-lg mt-3 shadow-sm"
              >
                Contact Us
              </a>
            </section>

            <div className="col-lg-5 h-25 d-block d-lg-none" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                <Link href="/service-details/ai_services">Lorem_1</Link>
                <Link href="/service-details/dynamic_Digital_marketing_solutions">Lorem_2</Link>
                <Link href="/service-details/b2b_b2c_sales_mastery" className="active">Lorem_3</Link>
                <Link href="/service-details/bpo_services">Lorem_4</Link>
                <Link href="/service-details/hr_consultancy">Lorem_5</Link>
              </div>
              <h4>Lorem_Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page;