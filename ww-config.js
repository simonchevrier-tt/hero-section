export default {
  editor: {
    label: {
      en: "Hero Section",
      fr: "Section Hero",
    },
  },
  properties: {
    // Badge
    badgeVisible: {
      label: { en: "Show badge", fr: "Afficher le badge" },
      type: "OnOff",
      defaultValue: true,
      section: "settings",
    },
    badgeText: {
      label: { en: "Badge text", fr: "Texte du badge" },
      type: "Text",
      defaultValue: "Available for Work",
      section: "settings",
      hidden: (content) => !content.badgeVisible,
    },

    // Texts
    titleText: {
      label: { en: "Title", fr: "Titre" },
      type: "Text",
      defaultValue: "Transform your ideas into digital success with us!",
      section: "settings",
    },
    descriptionText: {
      label: { en: "Description", fr: "Description" },
      type: "Text",
      defaultValue: "We're your partner in product design, website creation, and branding for every stage of your business.",
      section: "settings",
    },

    // Primary Button
    primaryButtonVisible: {
      label: { en: "Show primary button", fr: "Afficher bouton primaire" },
      type: "OnOff",
      defaultValue: true,
      section: "settings",
    },
    primaryButtonText: {
      label: { en: "Primary button text", fr: "Texte bouton primaire" },
      type: "Text",
      defaultValue: "Services",
      section: "settings",
      hidden: (content) => !content.primaryButtonVisible,
    },
    primaryButtonLink: {
      label: { en: "Primary button link", fr: "Lien bouton primaire" },
      type: "Text",
      defaultValue: "#services",
      section: "settings",
      hidden: (content) => !content.primaryButtonVisible,
    },

    // Secondary Button
    secondaryButtonVisible: {
      label: { en: "Show secondary button", fr: "Afficher bouton secondaire" },
      type: "OnOff",
      defaultValue: true,
      section: "settings",
    },
    secondaryButtonText: {
      label: { en: "Secondary button text", fr: "Texte bouton secondaire" },
      type: "Text",
      defaultValue: "Our work",
      section: "settings",
      hidden: (content) => !content.secondaryButtonVisible,
    },
    secondaryButtonLink: {
      label: { en: "Secondary button link", fr: "Lien bouton secondaire" },
      type: "Text",
      defaultValue: "#work",
      section: "settings",
      hidden: (content) => !content.secondaryButtonVisible,
    },

    // Image
    heroImage: {
      label: { en: "Hero image", fr: "Image hero" },
      type: "Image",
      defaultValue: "",
      section: "settings",
    },

    // Colors
    backgroundColor: {
      label: { en: "Background color", fr: "Couleur de fond" },
      type: "Color",
      defaultValue: "#0a0a1a",
      section: "style",
    },
    gradientColor: {
      label: { en: "Gradient color", fr: "Couleur du dégradé" },
      type: "Color",
      defaultValue: "#6b21a8",
      section: "style",
    },
    titleColor: {
      label: { en: "Title color", fr: "Couleur du titre" },
      type: "Color",
      defaultValue: "#ffffff",
      section: "style",
    },
    descriptionColor: {
      label: { en: "Description color", fr: "Couleur description" },
      type: "Color",
      defaultValue: "#a1a1aa",
      section: "style",
    },
    primaryButtonBgColor: {
      label: { en: "Primary button background", fr: "Fond bouton primaire" },
      type: "Color",
      defaultValue: "#ffffff",
      section: "style",
    },
    primaryButtonTextColor: {
      label: { en: "Primary button text color", fr: "Couleur texte bouton primaire" },
      type: "Color",
      defaultValue: "#0a0a1a",
      section: "style",
    },
    secondaryButtonBorderColor: {
      label: { en: "Secondary button border", fr: "Bordure bouton secondaire" },
      type: "Color",
      defaultValue: "#3f3f46",
      section: "style",
    },
    secondaryButtonTextColor: {
      label: { en: "Secondary button text color", fr: "Couleur texte bouton secondaire" },
      type: "Color",
      defaultValue: "#ffffff",
      section: "style",
    },
  },
};
