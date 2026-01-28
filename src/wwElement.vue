<template>
  <section class="hero-section" :style="sectionStyle">
    <!-- Gradient overlay -->
    <div class="hero-gradient" :style="gradientStyle"></div>

    <div class="hero-container">
      <!-- Left content -->
      <div class="hero-content">
        <!-- Badge -->
        <div v-if="content.badgeVisible" class="hero-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">{{ content.badgeText }}</span>
        </div>

        <!-- Title -->
        <h1 class="hero-title" :style="titleStyle">
          {{ content.titleText }}
        </h1>

        <!-- Description -->
        <p class="hero-description" :style="descriptionStyle">
          {{ content.descriptionText }}
        </p>

        <!-- Buttons -->
        <div class="hero-buttons">
          <a
            v-if="content.primaryButtonVisible"
            :href="content.primaryButtonLink"
            class="btn btn-primary"
            :style="primaryButtonStyle"
          >
            {{ content.primaryButtonText }}
          </a>
          <a
            v-if="content.secondaryButtonVisible"
            :href="content.secondaryButtonLink"
            class="btn btn-secondary"
            :style="secondaryButtonStyle"
          >
            {{ content.secondaryButtonText }}
          </a>
        </div>
      </div>

      <!-- Right image -->
      <div class="hero-image-wrapper">
        <img
          v-if="content.heroImage"
          :src="content.heroImage"
          alt="Hero image"
          class="hero-image"
          :style="imageStyle"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    sectionStyle() {
      return {
        backgroundColor: this.content.backgroundColor,
      };
    },
    gradientStyle() {
      return {
        background: `radial-gradient(ellipse at 70% 50%, ${this.content.gradientColor}40 0%, transparent 60%)`,
      };
    },
    titleStyle() {
      return {
        color: this.content.titleColor,
      };
    },
    descriptionStyle() {
      return {
        color: this.content.descriptionColor,
      };
    },
    primaryButtonStyle() {
      return {
        backgroundColor: this.content.primaryButtonBgColor,
        color: this.content.primaryButtonTextColor,
      };
    },
    secondaryButtonStyle() {
      return {
        borderColor: this.content.secondaryButtonBorderColor,
        color: this.content.secondaryButtonTextColor,
      };
    },
    imageStyle() {
      return {
        width: this.content.imageWidth,
        height: this.content.imageHeight,
        maxWidth: this.content.imageMaxWidth,
        maxHeight: this.content.imageMaxHeight,
        objectFit: this.content.imageFit,
        objectPosition: this.content.imagePosition,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.hero-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 40px;
  gap: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 24px;
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;

  @media (max-width: 968px) {
    max-width: 100%;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 50px;
  margin-bottom: 24px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.badge-text {
  font-size: 14px;
  font-weight: 500;
  color: #e4e4e7;
}

.hero-title {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 24px 0;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 32px 0;
  max-width: 500px;

  @media (max-width: 968px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  border: none;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 968px) {
    max-width: 100%;
    width: 100%;
  }
}

.hero-image {
  display: block;
}
</style>
