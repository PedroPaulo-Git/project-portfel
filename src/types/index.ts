import type { CSSProperties } from "react";

export type VideoPlayerProps = {
	url: string;
	playing?: boolean;
	loop?: boolean;
	muted?: boolean;
	width?: string;
	height?: string;
	style?: CSSProperties;
};

export type { CSSProperties };
