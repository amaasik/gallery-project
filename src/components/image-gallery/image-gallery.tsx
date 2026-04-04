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
  @State() modalIndex: number = 0;
  @State() isModalOpen: boolean = false;
  @State() isMobile: boolean = false;
  @State() announceText: string = '';

  private lastFocusedElement: HTMLElement | null = null;
  private modalCloseButtonRef?: HTMLButtonElement;
  private modalRef?: HTMLDivElement;

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
      this.lastFocusedElement = document.activeElement as HTMLElement;
      this.modalIndex = this.currentIndex;
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';

      // Focus the close button after modal opens
      setTimeout(() => {
        this.modalCloseButtonRef?.focus();
        this.announceText = `Lightbox opened. Viewing image ${this.modalIndex + 1} of ${this.images.length}`;
      }, 100);
    }
  };

  private goToModalPrevious = () => {
    this.modalIndex = this.modalIndex === 0 ? this.images.length - 1 : this.modalIndex - 1;
    this.announceText = `Image ${this.modalIndex + 1} of ${this.images.length}`;
  };

  private goToModalNext = () => {
    this.modalIndex = this.modalIndex === this.images.length - 1 ? 0 : this.modalIndex + 1;
    this.announceText = `Image ${this.modalIndex + 1} of ${this.images.length}`;
  };

  private selectModalImage = (index: number) => {
    this.modalIndex = index;
    this.announceText = `Image ${this.modalIndex + 1} of ${this.images.length}`;
  };

  private closeModal = () => {
    this.isModalOpen = false;
    document.body.style.overflow = '';
    this.announceText = 'Lightbox closed';

    // Restore focus to the element that opened the modal
    setTimeout(() => {
      this.lastFocusedElement?.focus();
    }, 100);
  };

  private handleModalClick = (event: MouseEvent) => {
    // Close modal when clicking the backdrop
    if (event.target === this.modalRef) {
      this.closeModal();
    }
  };

  private trapFocus = (event: KeyboardEvent) => {
    if (!this.isModalOpen || event.key !== 'Tab') return;

    const focusableElements = this.modalRef?.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])');

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
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
    this.trapFocus(event);

    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'ArrowLeft') {
      this.goToModalPrevious();
    } else if (event.key === 'ArrowRight') {
      this.goToModalNext();
    }
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

  private handleModalThumbnailKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectModalImage(index);
    }
  };

  render() {
    const currentImage = this.images[this.currentIndex];
    const modalImage = this.images[this.modalIndex];

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
          <div
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
            onClick={this.handleModalClick}
            onKeyDown={this.handleModalKeyDown}
            ref={el => (this.modalRef = el)}
          >
            <div class="modal__content" onClick={(e: Event) => e.stopPropagation()}>
              <button class="modal__close" onClick={this.closeModal} aria-label="Close lightbox" type="button" ref={el => (this.modalCloseButtonRef = el)}>
                <img src="./assets/icon-close.svg" alt="" aria-hidden="true" />
              </button>

              <div class="modal__image-container">
                <img class="modal__image" src={modalImage.full} alt={modalImage.alt} />

                <button class="modal__nav modal__nav--previous" onClick={this.goToModalPrevious} aria-label="Previous image" type="button">
                  <img src="./assets/icon-previous.svg" alt="" aria-hidden="true" />
                </button>

                <button class="modal__nav modal__nav--next" onClick={this.goToModalNext} aria-label="Next image" type="button">
                  <img src="./assets/icon-next.svg" alt="" aria-hidden="true" />
                </button>
              </div>

              <div class="modal__thumbnails" role="tablist" aria-label="Product images">
                {this.images.map((image, index) => (
                  <button
                    class={`modal__thumbnail ${index === this.modalIndex ? 'modal__thumbnail--active' : ''}`}
                    onClick={() => this.selectModalImage(index)}
                    onKeyDown={(e: KeyboardEvent) => this.handleModalThumbnailKeyDown(e, index)}
                    role="tab"
                    aria-selected={index === this.modalIndex ? 'true' : 'false'}
                    aria-label={`View image ${index + 1}`}
                    tabIndex={index === this.modalIndex ? 0 : -1}
                    type="button"
                  >
                    <img class="modal__thumbnail-image" src={image.thumbnail} alt="" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Live region for screen reader announcements */}
        <div role="status" aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
          {this.announceText}
        </div>
      </Host>
    );
  }
}
