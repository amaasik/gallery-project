import { r as registerInstance, h, a as Host } from './index-CTWNaD4H.js';

const imageGalleryCss = () => `:host{display:block;width:100%;max-width:1440px;margin:0;padding:0}.gallery{width:100%;padding:0;margin:0}.gallery__main{position:relative;width:100%;aspect-ratio:1 / 1;overflow:hidden;border-radius:0}.gallery__image-container{width:100%;height:100%;cursor:pointer;outline:none}.gallery__image-container:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:-3px}.gallery__image{width:100%;height:100%;object-fit:cover;display:block}.gallery__nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;background-color:hsl(0, 0%, 100%);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;transition:opacity 0.2s ease}.gallery__nav:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.gallery__nav:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.gallery__nav:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.gallery__nav--previous{left:16px}.gallery__nav--next{right:16px}.gallery__nav img{width:12px;height:18px;transition:filter 0.2s ease}.gallery__thumbnails{display:none;gap:16px;margin-top:24px;justify-content:center;flex-wrap:wrap}.gallery__thumbnail{width:88px;height:88px;border:2px solid transparent;border-radius:10px;overflow:hidden;cursor:pointer;background:none;padding:0;position:relative;transition:border-color 0.2s ease}.gallery__thumbnail:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.gallery__thumbnail:hover .gallery__thumbnail-image{opacity:0.5}.gallery__thumbnail--active{border-color:hsl(26, 100%, 55%)}.gallery__thumbnail--active .gallery__thumbnail-image{opacity:0.4}.gallery__thumbnail-image{width:100%;height:100%;object-fit:cover;display:block;transition:opacity 0.2s ease}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:hsla(0, 0%, 0%, 0.75);display:flex;align-items:center;justify-content:center;z-index:1000;padding:20px}.modal__content{position:relative;width:100%;max-width:550px;display:flex;flex-direction:column;align-items:center;padding:0 40px}.modal__close{align-self:flex-end;background:none;border:none;cursor:pointer;margin-bottom:24px;padding:8px;transition:opacity 0.2s ease}.modal__close:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__close:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__close:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px;border-radius:4px}.modal__close img{width:20px;height:20px;filter:brightness(0) invert(1);transition:filter 0.2s ease}.modal__image-container{position:relative;width:100%;aspect-ratio:1 / 1;margin-bottom:32px;border-radius:16px;overflow:visible}.modal__image{width:100%;height:100%;object-fit:cover;display:block;border-radius:16px}.modal__nav{position:absolute;top:50%;transform:translateY(-50%);width:56px;height:56px;background-color:hsl(0, 0%, 100%);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity 0.2s ease;z-index:10}.modal__nav:hover img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__nav:active img{filter:invert(58%) sepia(89%) saturate(2604%) hue-rotate(346deg) brightness(101%) contrast(101%)}.modal__nav:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.modal__nav--previous{left:-28px}.modal__nav--next{right:-28px}.modal__nav img{width:16px;height:24px;transition:filter 0.2s ease}.modal__thumbnails{display:flex;gap:24px;justify-content:center;flex-wrap:wrap}.modal__thumbnail{width:88px;height:88px;border:2px solid transparent;border-radius:10px;overflow:hidden;cursor:pointer;background:none;padding:0;position:relative;transition:border-color 0.2s ease}.modal__thumbnail:focus-visible{outline:3px solid hsl(26, 100%, 55%);outline-offset:2px}.modal__thumbnail:hover .modal__thumbnail-image{opacity:0.5}.modal__thumbnail--active{border-color:hsl(26, 100%, 55%)}.modal__thumbnail--active .modal__thumbnail-image{opacity:0.4}.modal__thumbnail-image{width:100%;height:100%;object-fit:cover;display:block;background-color:hsl(0, 0%, 100%);transition:opacity 0.2s ease}@media (min-width: 768px){:host{margin:0 auto}.gallery{padding:20px}.gallery__main{border-radius:16px}.gallery__nav{display:none}.gallery__thumbnails{display:flex}.gallery__image-container:hover .gallery__image{opacity:0.9}}@media (min-width: 1024px){.gallery{padding:40px}.gallery__thumbnails{gap:24px;margin-top:32px}.gallery__thumbnail{width:100px;height:100px}}@media (max-width: 320px){.gallery__nav{width:36px;height:36px}.gallery__nav--previous{left:12px}.gallery__nav--next{right:12px}.gallery__nav img{width:10px;height:16px}}`;

const ImageGallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currentIndex = 0;
    isModalOpen = false;
    isMobile = false;
    images = [
        {
            full: '/assets/image-product-1.jpg',
            thumbnail: '/assets/image-product-1-thumbnail.jpg',
            alt: 'Product image 1',
        },
        {
            full: '/assets/image-product-2.jpg',
            thumbnail: '/assets/image-product-2-thumbnail.jpg',
            alt: 'Product image 2',
        },
        {
            full: '/assets/image-product-3.jpg',
            thumbnail: '/assets/image-product-3-thumbnail.jpg',
            alt: 'Product image 3',
        },
        {
            full: '/assets/image-product-4.jpg',
            thumbnail: '/assets/image-product-4-thumbnail.jpg',
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
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
        }
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
        this.handleKeyDown(event);
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
    render() {
        const currentImage = this.images[this.currentIndex];
        return (h(Host, { key: 'b7815eacfe9d1feaef1e651bc9fcaa2086158a38' }, h("div", { key: 'cfee0f7ea809aba1c5860dcf895422c156c4492d', class: "gallery" }, h("div", { key: 'c6210638f475ff0cdda1dd7f98f2fb4f56de17f0', class: "gallery__main" }, h("div", { key: '5594d98ff838bbc1cd26c61fdb8df945bbf645c4', class: "gallery__image-container", role: "button", tabIndex: 0, onClick: this.openModal, onKeyDown: this.handleMainImageKeyDown, "aria-label": `View ${currentImage.alt} in fullscreen. Current image ${this.currentIndex + 1} of ${this.images.length}` }, h("img", { key: '1ca5e0798630fd2222419b7350ff04ef5cbe3f45', class: "gallery__image", src: currentImage.full, alt: currentImage.alt })), h("button", { key: 'be04a4f46b1973b15bb895c24e221b9fcd9634f2', class: "gallery__nav gallery__nav--previous", onClick: this.goToPrevious, "aria-label": "Previous image", type: "button" }, h("img", { key: '8c7108f8c0b43ff5a0ee56a2a4bbfbf0fe06eb9b', src: "/assets/icon-previous.svg", alt: "", "aria-hidden": "true" })), h("button", { key: '7782816a3ebb568dd35cd333706c08fb8b2c7baf', class: "gallery__nav gallery__nav--next", onClick: this.goToNext, "aria-label": "Next image", type: "button" }, h("img", { key: '9706717dfe2ee8c5732322dfe0d5d1c0ac8ce9cd', src: "/assets/icon-next.svg", alt: "", "aria-hidden": "true" }))), !this.isMobile && (h("div", { key: 'ed0ed486994571c2efeb14fc3a317e6a73f540f6', class: "gallery__thumbnails", role: "tablist", "aria-label": "Product images" }, this.images.map((image, index) => (h("button", { class: `gallery__thumbnail ${index === this.currentIndex ? 'gallery__thumbnail--active' : ''}`, onClick: () => this.selectImage(index), onKeyDown: (e) => this.handleThumbnailKeyDown(e, index), role: "tab", "aria-selected": index === this.currentIndex ? 'true' : 'false', "aria-label": `View image ${index + 1}`, tabIndex: index === this.currentIndex ? 0 : -1, type: "button" }, h("img", { class: "gallery__thumbnail-image", src: image.thumbnail, alt: "", "aria-hidden": "true" }))))))), this.isModalOpen && !this.isMobile && (h("div", { key: 'a898d9a648a087ae9ee43c7a7181e80bbcda0be6', class: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Image gallery lightbox", onClick: this.closeModal, onKeyDown: this.handleModalKeyDown }, h("div", { key: 'b823d552cd11b67a00944aee0bd54220e417d5e9', class: "modal__content", onClick: (e) => e.stopPropagation() }, h("button", { key: '85de7e56051c5e293022c8567b7d59d47bf53615', class: "modal__close", onClick: this.closeModal, "aria-label": "Close lightbox", type: "button" }, h("img", { key: '21a16701b0c9bd147e6193745af1deeb68e7ffff', src: "/assets/icon-close.svg", alt: "", "aria-hidden": "true" })), h("div", { key: 'cbce17a4300d9a500c0a6dcca031f284912d7285', class: "modal__image-container" }, h("img", { key: 'c3f61ff04d1e6df0401dfabb0e9164713386ef63', class: "modal__image", src: currentImage.full, alt: currentImage.alt }), h("button", { key: 'f3285b48e209fb503f2ad8b2644f6396f467f7f7', class: "modal__nav modal__nav--previous", onClick: this.goToPrevious, "aria-label": "Previous image", type: "button" }, h("img", { key: 'fc0e87b155fb2b23d78afd2d40b2a213d800be76', src: "/assets/icon-previous.svg", alt: "", "aria-hidden": "true" })), h("button", { key: '22c1bf4c2d756c6d350988b843a0bef28b5b9f0c', class: "modal__nav modal__nav--next", onClick: this.goToNext, "aria-label": "Next image", type: "button" }, h("img", { key: '7ca659833e6c607591145e171345a3446b1204c2', src: "/assets/icon-next.svg", alt: "", "aria-hidden": "true" }))), h("div", { key: 'fd1199611c663afff015d976fc7b3e83f113c134', class: "modal__thumbnails", role: "tablist", "aria-label": "Product images" }, this.images.map((image, index) => (h("button", { class: `modal__thumbnail ${index === this.currentIndex ? 'modal__thumbnail--active' : ''}`, onClick: () => this.selectImage(index), onKeyDown: (e) => this.handleThumbnailKeyDown(e, index), role: "tab", "aria-selected": index === this.currentIndex ? 'true' : 'false', "aria-label": `View image ${index + 1}`, tabIndex: index === this.currentIndex ? 0 : -1, type: "button" }, h("img", { class: "modal__thumbnail-image", src: image.thumbnail, alt: "", "aria-hidden": "true" }))))))))));
    }
    static get assetsDirs() { return ["assets"]; }
};
ImageGallery.style = imageGalleryCss();

export { ImageGallery as image_gallery };
//# sourceMappingURL=image-gallery.entry.esm.js.map

//# sourceMappingURL=image-gallery.entry.js.map