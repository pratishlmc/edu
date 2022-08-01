function SliderImage({ image }) {
	return (
		<div className="h-96">
			<img src={image} className="w-full h-full object-cover"></img>
		</div>
	);
}

export default SliderImage;
