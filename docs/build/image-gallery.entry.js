import { r as registerInstance, h, a as Host } from './index-CTWNaD4H.js';

const imageGalleryCss = () => `:host{display:block;width:100%;max-width:1440px;margin:0;padding:0}.gallery{width:100%;padding:0;margin:0}.gallery__main{position:relative;width:100%;aspect-ratio:1 / 1;overflow:hidden;border-radius:0}.gallery__image-container{width:100%;height:100%;cursor:pointer;outline:none}.gallery__image-container:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:-3px}.gallery__image{width:100%;height:100%;object-fit:cover;display:block}.gallery__nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background-color:hsl(0, 0%, 100%);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;transition:opacity 0.2s ease}.gallery__nav:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.gallery__nav:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.gallery__nav:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.gallery__nav--previous{left:16px}.gallery__nav--next{right:16px}.gallery__nav img{width:12px;height:18px;transition:filter 0.2s ease}.gallery__thumbnails{display:none;gap:16px;margin-top:24px;justify-content:center;flex-wrap:wrap}.gallery__thumbnail{width:88px;height:88px;border:2px solid transparent;border-radius:10px;overflow:hidden;cursor:pointer;background:none;padding:0;position:relative;transition:border-color 0.2s ease}.gallery__thumbnail:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.gallery__thumbnail:hover .gallery__thumbnail-image{opacity:0.5}.gallery__thumbnail--active{border-color:hsl(26, 100%, 55%)}.gallery__thumbnail--active .gallery__thumbnail-image{opacity:0.4}.gallery__thumbnail-image{width:100%;height:100%;object-fit:cover;display:block;transition:opacity 0.2s ease}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:hsla(0, 0%, 0%, 0.75);display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px}.modal__content{position:relative;width:100%;max-width:550px;display:flex;flex-direction:column;align-items:center;padding:0 40px}.modal__close{align-self:flex-end;background:none;border:none;cursor:pointer;margin-bottom:24px;padding:8px;transition:opacity 0.2s ease}.modal__close:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__close:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__close:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px;border-radius:4px}.modal__close img{width:20px;height:20px;filter:brightness(0) invert(1);transition:filter 0.2s ease}.modal__image-container{position:relative;width:100%;aspect-ratio:1 / 1;margin-bottom:32px;border-radius:16px;overflow:visible}.modal__image{width:100%;height:100%;object-fit:cover;display:block;border-radius:16px}.modal__nav{position:absolute;top:50%;transform:translateY(-50%);width:56px;height:56px;background-color:hsl(0, 0%, 100%);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity 0.2s ease;z-index:10}.modal__nav:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__nav:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__nav:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.modal__nav--previous{left:-28px}.modal__nav--next{right:-28px}.modal__nav img{width:16px;height:24px;transition:filter 0.2s ease}.modal__thumbnails{display:flex;gap:24px;justify-content:center;flex-wrap:wrap}.modal__thumbnail{width:88px;height:88px;border:2px solid transparent;border-radius:10px;overflow:hidden;cursor:pointer;background:none;padding:0;position:relative;transition:border-color 0.2s ease}.modal__thumbnail:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.modal__thumbnail:hover .modal__thumbnail-image{opacity:0.5}.modal__thumbnail--active{border-color:hsl(26, 100%, 55%)}.modal__thumbnail--active .modal__thumbnail-image{opacity:0.4}.modal__thumbnail-image{width:100%;height:100%;object-fit:cover;display:block;background-color:hsl(0, 0%, 100%);transition:opacity 0.2s ease}@media (min-width: 768px){:host{margin:0 auto}.gallery{padding:20px}.gallery__main{border-radius:16px}.gallery__nav{display:none}.gallery__thumbnails{display:flex}.gallery__image-container:hover .gallery__image{opacity:0.9}}@media (min-width: 1024px){.gallery{padding:40px}.gallery__thumbnails{gap:24px;margin-top:32px}.gallery__thumbnail{width:100px;height:100px}}@media (max-width: 320px){.gallery__nav{width:36px;height:36px}.gallery__nav--previous{left:12px}.gallery__nav--next{right:12px}.gallery__nav img{width:10px;height:16px}}`;

const ImageGallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currentIndex = 0;
    modalIndex = 0;
    isModalOpen = false;
    isMobile = false;
    images = [
        {
            full: './assets/image-product-1.jpg',
            thumbnail: './assets/image-product-1-thumbnail.jpg',
            alt: 'Product image 1',
        },
        {
            full: './assets/image-product-2.jpg',
            thumbnail: './assets/image-product-2-thumbnail.jpg',
            alt: 'Product image 2',
        },
        {
            full: './assets/image-product-3.jpg',
            thumbnail: './assets/image-product-3-thumbnail.jpg',
            alt: 'Product image 3',
        },
        {
            full: './assets/image-product-4.jpg',
            thumbnail: './assets/image-product-4-thumbnail.jpg',
            alt: 'Product image 4',
        },
    ];
    componentWillLoad() {
        this.checkIfMobile();
    }
    connectedCallback() {
        window.addEventListener('resize', this.handleResize);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.checkIfMobile();
    };
    checkIfMobile() {
        this.isMobile = window.innerWidth < 768;
    }
    goToPrevious = () => {
        this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    };
    goToNext = () => {
        this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    };
    selectImage = (index) => {
        this.currentIndex = index;
    };
    openModal = () => {
        if (!this.isMobile) {
            this.modalIndex = this.currentIndex;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
        }
    };
    goToModalPrevious = () => {
        this.modalIndex = this.modalIndex === 0 ? this.images.length - 1 : this.modalIndex - 1;
    };
    goToModalNext = () => {
        this.modalIndex = this.modalIndex === this.images.length - 1 ? 0 : this.modalIndex + 1;
    };
    selectModalImage = (index) => {
        this.modalIndex = index;
    };
    closeModal = () => {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    };
    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.closeModal();
        }
        else if (event.key === 'ArrowLeft') {
            this.goToPrevious();
        }
        else if (event.key === 'ArrowRight') {
            this.goToNext();
        }
    };
    handleModalKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.closeModal();
        }
        else if (event.key === 'ArrowLeft') {
            this.goToModalPrevious();
        }
        else if (event.key === 'ArrowRight') {
            this.goToModalNext();
        }
    };
    handleMainImageKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.openModal();
        }
        this.handleKeyDown(event);
    };
    handleThumbnailKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectImage(index);
        }
    };
    handleModalThumbnailKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectModalImage(index);
        }
    };
    render() {
        const currentImage = this.images[this.currentIndex];
        const modalImage = this.images[this.modalIndex];
        return (h(Host, { key: '8f3709d9a790b68676f392777e7d9d1fb8819e9e' }, h("div", { key: 'eaf781d7b75544a4da434b0648a155bb5bdbbb65', class: "gallery" }, h("div", { key: 'bdba810fadbe819af128ef19614077ca065f5d42', class: "gallery__main" }, h("div", { key: 'ac48a04af65e8dfd14aef822a8ac9b903363f0c5', class: "gallery__image-container", role: "button", tabIndex: 0, onClick: this.openModal, onKeyDown: this.handleMainImageKeyDown, "aria-label": `View ${currentImage.alt} in fullscreen. Current image ${this.currentIndex + 1} of ${this.images.length}` }, h("img", { key: 'b124d09802224414a2ff5a554603c72fef431af8', class: "gallery__image", src: currentImage.full, alt: currentImage.alt })), h("button", { key: '2ba93ee91a6c30f91b2b160ca9ae49c1de8a5bba', class: "gallery__nav gallery__nav--previous", onClick: this.goToPrevious, "aria-label": "Previous image", type: "button" }, h("img", { key: 'e03aabbbdd5c4761cfee15696b4e577134f23c1f', src: "./assets/icon-previous.svg", alt: "", "aria-hidden": "true" })), h("button", { key: 'e0736fda90ae1275b633ec3737d3ff72c1da8f15', class: "gallery__nav gallery__nav--next", onClick: this.goToNext, "aria-label": "Next image", type: "button" }, h("img", { key: '6a243021b444ad064946d459070f7a339abed865', src: "./assets/icon-next.svg", alt: "", "aria-hidden": "true" }))), !this.isMobile && (h("div", { key: '0e821fe533089b5c4a9a0e92e5e73994d08daad8', class: "gallery__thumbnails", role: "tablist", "aria-label": "Product images" }, this.images.map((image, index) => (h("button", { class: `gallery__thumbnail ${index === this.currentIndex ? 'gallery__thumbnail--active' : ''}`, onClick: () => this.selectImage(index), onKeyDown: (e) => this.handleThumbnailKeyDown(e, index), role: "tab", "aria-selected": index === this.currentIndex ? 'true' : 'false', "aria-label": `View image ${index + 1}`, tabIndex: index === this.currentIndex ? 0 : -1, type: "button" }, h("img", { class: "gallery__thumbnail-image", src: image.thumbnail, alt: "", "aria-hidden": "true" }))))))), this.isModalOpen && !this.isMobile && (h("div", { key: '2b098a1ca7dcc4d5fdcc446da235448088960794', class: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Image gallery lightbox", onClick: this.closeModal, onKeyDown: this.handleModalKeyDown }, h("div", { key: 'd4c2d4ea725356b66cccfd01168235638393710a', class: "modal__content", onClick: (e) => e.stopPropagation() }, h("button", { key: 'a89f9f87db8f932208265dc2f86bda4feec44c17', class: "modal__close", onClick: this.closeModal, "aria-label": "Close lightbox", type: "button" }, h("img", { key: 'ddf1d9e2a4a09fedacfb81c0b7786770717cf6e3', src: "./assets/icon-close.svg", alt: "", "aria-hidden": "true" })), h("div", { key: 'bd58cb078721a0f3ed45c8ee35d170368f98153d', class: "modal__image-container" }, h("img", { key: '81b85b8941f348b7b4eecc4c8f3b9473fffffe04', class: "modal__image", src: modalImage.full, alt: modalImage.alt }), h("button", { key: 'de48a099782d7073c30a4a6b56c15c964bbbcef9', class: "modal__nav modal__nav--previous", onClick: this.goToModalPrevious, "aria-label": "Previous image", type: "button" }, h("img", { key: '2c61ecf3311ea81a61ef35d00806d182dbde5c2b', src: "./assets/icon-previous.svg", alt: "", "aria-hidden": "true" })), h("button", { key: 'f0109775b7ff4c1b85626b57c5c0f5e6e399b920', class: "modal__nav modal__nav--next", onClick: this.goToModalNext, "aria-label": "Next image", type: "button" }, h("img", { key: 'a3bf090b261aae041e41c1e8e859ae7cb0f497ba', src: "./assets/icon-next.svg", alt: "", "aria-hidden": "true" }))), h("div", { key: 'c33b40c0843c707d6c15ab39fdfc700715f84715', class: "modal__thumbnails", role: "tablist", "aria-label": "Product images" }, this.images.map((image, index) => (h("button", { class: `modal__thumbnail ${index === this.modalIndex ? 'modal__thumbnail--active' : ''}`, onClick: () => this.selectModalImage(index), onKeyDown: (e) => this.handleModalThumbnailKeyDown(e, index), role: "tab", "aria-selected": index === this.modalIndex ? 'true' : 'false', "aria-label": `View image ${index + 1}`, tabIndex: index === this.modalIndex ? 0 : -1, type: "button" }, h("img", { class: "modal__thumbnail-image", src: image.thumbnail, alt: "", "aria-hidden": "true" }))))))))));
    }
    static get assetsDirs() { return ["assets"]; }
};
ImageGallery.style = imageGalleryCss();

export { ImageGallery as image_gallery };
//# sourceMappingURL=image-gallery.entry.esm.js.map

//# sourceMappingURL=image-gallery.entry.js.map