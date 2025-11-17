"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function LatestProjectsSection({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1.2}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-primary", // สี
                    bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-2!" // ข้อ 3: ขยับ pagination ลงมา
            >
                {Array.isArray(children) &&
                    children.map((child, index) => (
                        <SwiperSlide key={index}>{child}</SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}
