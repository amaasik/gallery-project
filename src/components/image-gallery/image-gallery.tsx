import { Component, State, h, Host } from '@stencil/core';

interface GalleryImage {
  full: string;
  thumbnail: string;
  alt: string;
}

@Component({
  tag: 'image-gallery',
  styleUrl: 'image-gallery.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ImageGallery {
  @State() currentIndex: number = 0;
  @State() isModalOpen: boolean = false;
  @State() isMobile: boolean = false;

  private images: GalleryImage[] = [
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

  private handleResize = () => {
    this.checkIfMobile();
  };

  private checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  private goToPrevious = () => {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  };

  private goToNext = () => {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  };

  private selectImage = (index: number) => {
    this.currentIndex = index;
  };

  private openModal = () => {
    if (!this.isMobile) {
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    }
  };

  private closeModal = () => {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'ArrowLeft') {
      this.goToPrevious();
    } else if (event.key === 'ArrowRight') {
      this.goToNext();
    }
  };

  private handleModalKeyDown = (event: KeyboardEvent) => {
    this.handleKeyDown(event);
  };

  private handleMainImageKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openModal();
    }
    this.handleKeyDown(event);
  };

  private handleThumbnailKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectImage(index);
    }
  };

  render() {
    const currentImage = this.images[this.currentIndex];

    return (
      <Host>
        <div class="gallery">
          <div class="gallery__main">
            <div
              class="gallery__image-container"
              role="button"
              tabIndex={0}
              onClick={this.openModal}
              onKeyDown={this.handleMainImageKeyDown}
              aria-label={`View ${currentImage.alt} in fullscreen. Current image ${this.currentIndex + 1} of ${this.images.length}`}
            >
              <img class="gallery__image" src={currentImage.full} alt={currentImage.alt} />
            </div>

            <button class="gallery__nav gallery__nav--previous" onClick={this.goToPrevious} aria-label="Previous image" type="button">
              <img src="./assets/icon-previous.svg" alt="" aria-hidden="true" />
            </button>

            <button class="gallery__nav gallery__nav--next" onClick={this.goToNext} aria-label="Next image" type="button">
              <img src="./assets/icon-next.svg" alt="" aria-hidden="true" />
            </button>
          </div>

          {!this.isMobile && (
            <div class="gallery__thumbnails" role="tablist" aria-label="Product images">
              {this.images.map((image, index) => (
                <button
                  class={`gallery__thumbnail ${index === this.currentIndex ? 'gallery__thumbnail--active' : ''}`}
                  onClick={() => this.selectImage(index)}
                  onKeyDown={(e: KeyboardEvent) => this.handleThumbnailKeyDown(e, index)}
                  role="tab"
                  aria-selected={index === this.currentIndex ? 'true' : 'false'}
                  aria-label={`View image ${index + 1}`}
                  tabIndex={index === this.currentIndex ? 0 : -1}
                  type="button"
                >
                  <img class="gallery__thumbnail-image" src={image.thumbnail} alt="" aria-hidden="true" />
                </button>
              ))}
            </div>
          )}
        </div>

        {this.isModalOpen && !this.isMobile && (
          <div class="modal" role="dialog" aria-modal="true" aria-label="Image gallery lightbox" onClick={this.closeModal} onKeyDown={this.handleModalKeyDown}>
            <div class="modal__content" onClick={(e: Event) => e.stopPropagation()}>
              <button class="modal__close" onClick={this.closeModal} aria-label="Close lightbox" type="button">
                <img src="./assets/icon-close.svg" alt="" aria-hidden="true" />
              </button>

              <div class="modal__image-container">
                <img class="modal__image" src={currentImage.full} alt={currentImage.alt} />

                <button class="modal__nav modal__nav--previous" onClick={this.goToPrevious} aria-label="Previous image" type="button">
                  <img src="./assets/icon-previous.svg" alt="" aria-hidden="true" />
                </button>

                <button class="modal__nav modal__nav--next" onClick={this.goToNext} aria-label="Next image" type="button">
                  <img src="./assets/icon-next.svg" alt="" aria-hidden="true" />
                </button>
              </div>

              <div class="modal__thumbnails" role="tablist" aria-label="Product images">
                {this.images.map((image, index) => (
                  <button
                    class={`modal__thumbnail ${index === this.currentIndex ? 'modal__thumbnail--active' : ''}`}
                    onClick={() => this.selectImage(index)}
                    onKeyDown={(e: KeyboardEvent) => this.handleThumbnailKeyDown(e, index)}
                    role="tab"
                    aria-selected={index === this.currentIndex ? 'true' : 'false'}
                    aria-label={`View image ${index + 1}`}
                    tabIndex={index === this.currentIndex ? 0 : -1}
                    type="button"
                  >
                    <img class="modal__thumbnail-image" src={image.thumbnail} alt="" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
