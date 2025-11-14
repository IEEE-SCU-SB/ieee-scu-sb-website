"use client";

import {useState} from "react";
import {CldImage} from "next-cloudinary";
import ImageSkeleton from "@/components/ImageSkeleton";

interface Props {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	sizes?: string;
	className?: string;
	imgClassName?: string;
}

export default function CloudinaryImage({src, alt, width = 400, height = 225, sizes, className, imgClassName}: Props) {
	const [loaded, setLoaded] = useState(false);

	const defaultImgClass = `w-full h-auto object-center object-cover aspect-video transition-opacity duration-500 ${
		loaded ? "opacity-100" : "opacity-0"
	}`;

	return (
		<div className={` relative ${className ?? ""} *:mx-auto`}>
			{!loaded && <ImageSkeleton />}

			<CldImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				sizes={sizes}
				className={imgClassName ?? defaultImgClass}
				onLoad={() => setLoaded(true)}
			/>
		</div>
	);
}
