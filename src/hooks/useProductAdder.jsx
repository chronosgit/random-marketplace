import { useState } from "react";

const useProductAdder = (product = {}) => {
	const [productData, setProductData] = useState({
		price: product.price || "",
		name: product.name || "",
		descrShort: product.descrShort || "",
		descrFull: product.descrFull || "",
		images: product.images || [],
	});

	const setPrice = (newPrice) => {
		setProductData({
			...productData,
			price: newPrice,
		})
	};

	const setName = (newName) => {
		setProductData({
			...productData,
			name: newName,
		})
	};

	const setDescrShort = (newDescrShort) => {
		setProductData({
			...productData,
			descrShort: newDescrShort,
		})
	};

	const setDescrFull = (newDescrFull) => {
		setProductData({
			...productData,
			descrFull: newDescrFull,
		})
	};

	const addPhoto = () => {
		const input = document.createElement('input')
		input.type = 'file'
	
		input.onchange = (e) => {
			const file = e.target.files[0];

			if(file) {
				const reader = new FileReader();

				reader.onload = (readerEvent) => {
					const imageDataUrl = readerEvent.target.result;
					setProductData({
						...productData,
						images: [
							...productData.images,
							imageDataUrl,
						],
					});
				}
				
				reader.readAsDataURL(file);
			}
		}
	
		input.click();
	};

	const clearProductData = () => {
		setProductData({
			price: "",
			name: "",
			descrShort: "",
			descrFull: "",
		});
	};

	const areFieldsEmpty = () => {
		if(
			productData.price === "" ||
			productData.name === "" ||
			productData.descrShort === "" ||
			productData.descrFull === ""
		) {
			return true;
		}

		return false;
	};

	return {
		productData,
		setPrice,
		setName,
		setDescrShort,
		setDescrFull,
		clearProductData,
		areFieldsEmpty,
		addPhoto,
	};
};

export default useProductAdder;