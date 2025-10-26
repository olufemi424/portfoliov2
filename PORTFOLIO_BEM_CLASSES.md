# BEM Classes Guide - Portfolio Application

This document lists all BEM (Block Element Modifier) classes added to portfolio components for identification and grouping purposes. All Tailwind CSS classes are preserved.

## Completed Components

### 1. Hero Section

**Block**: `hero`

**Elements**:
- `hero__container` - Main container wrapper
- `hero__top-row` - Top row grid container (Profile + About)
- `hero__bottom-row` - Bottom row grid container (Skills + Contact)

### 2. Profile Section

**Block**: `hero__profile` (element of hero)

**Elements**:
- `hero__profile-content` - Profile content wrapper
- `hero__profile-image` - Profile image container
- `hero__profile-image-wrapper` - Profile image border wrapper
- `hero__profile-img` - Profile image element
- `hero__profile-status` - Availability status indicator
- `hero__profile-info` - Text info container
- `hero__title` - Name/title heading
- `hero__subtitle` - Role/subtitle text
- `hero__social-links` - Social links container
- `hero__social-link` - Individual social link
- `hero__social-link--github` - GitHub social link modifier
- `hero__social-link--linkedin` - LinkedIn social link modifier
- `hero__social-link--twitter` - Twitter social link modifier
- `hero__social-icon` - Social icon element

### 3. About Section

**Block**: `hero__about` (element of hero)

**Elements**:
- `hero__about-content` - About content wrapper
- `hero__about-intro` - Intro section
- `hero__about-title` - About section title
- `hero__about-text` - About description text
- `hero__stats` - Stats grid container
- `hero__stat` - Individual stat card
- `hero__stat--experience` - Experience stat modifier
- `hero__stat--projects` - Projects stat modifier
- `hero__stat-value` - Stat number value
- `hero__stat-label` - Stat label text
- `hero__highlights` - Highlights container
- `hero__highlight` - Individual highlight item
- `hero__highlight--focus` - Focus areas highlight modifier
- `hero__highlight--philosophy` - Philosophy highlight modifier
- `hero__highlight-icon` - Highlight emoji icon
- `hero__highlight-content` - Highlight content wrapper
- `hero__highlight-title` - Highlight title
- `hero__highlight-text` - Highlight description

### 4. Skills Section

**Block**: `hero__skills` (element of hero)

**Elements**:
- `hero__skills-title` - Skills section title
- `hero__skills-list` - Skills list container
- `hero__skill-category` - Skill category card
- `hero__skill-header` - Category header
- `hero__skill-icon` - Category icon
- `hero__skill-name` - Category name
- `hero__skill-items` - Technology items container
- `hero__skill-item` - Individual technology tag

### 5. Contact Section

**Block**: `hero__contact` (element of hero)

**Elements**:
- `hero__contact-title` - Contact section title
- `hero__contact-subtitle` - Contact subtitle text
- `hero__contact-links` - Contact links container
- `hero__contact-link` - Individual contact link
- `hero__contact-link--email` - Email link modifier
- `hero__contact-link--linkedin` - LinkedIn link modifier
- `hero__contact-link--github` - GitHub link modifier
- `hero__contact-icon-wrapper` - Icon wrapper container
- `hero__contact-icon` - Contact icon element
- `hero__contact-info` - Contact info container
- `hero__contact-label` - Contact label text
- `hero__contact-value` - Contact value text
- `hero__contact-footer` - Contact footer
- `hero__contact-availability` - Availability message

### 6. Projects Section

**Block**: `projects`

**Elements**:
- `projects__container` - Main container wrapper
- `projects__grid` - Projects grid container
- `projects__item` - Individual project wrapper
- `projects__card` - Project card container
- `projects__image` - Project image container
- `projects__img` - Project image element
- `projects__content` - Project content wrapper
- `projects__title` - Project title
- `projects__description` - Project description
- `projects__tech` - Technologies section
- `projects__tech-list` - Technologies list container
- `projects__tech-tag` - Individual technology tag
- `projects__links` - Project links container
- `projects__link` - Individual project link
- `projects__link--demo` - Demo link modifier
- `projects__link-icon` - Link icon
- `projects__link-text` - Link text
- `projects__link-external` - External link indicator icon

## BEM Naming Convention

**Pattern**: `block__element--modifier`

- **Block**: Standalone component (e.g., `hero`, `projects`)
- **Element**: Part of a block (e.g., `hero__profile`, `projects__card`)
- **Modifier**: Variation of block or element (e.g., `hero__social-link--github`)

## Usage Example

```tsx
// Before
<div className="p-6 border border-black/10 rounded-xl">
  <h2 className="text-xl font-bold">Skills</h2>
  <div className="space-y-4">
    <div className="p-4 border rounded-lg">
      <span className="text-xl">🎨</span>
      <h3 className="font-semibold">Frontend</h3>
    </div>
  </div>
</div>

// After (with BEM + Tailwind)
<div className="hero__skills p-6 border border-black/10 rounded-xl">
  <h2 className="hero__skills-title text-xl font-bold">Skills</h2>
  <div className="hero__skills-list space-y-4">
    <div className="hero__skill-category p-4 border rounded-lg">
      <span className="hero__skill-icon text-xl">🎨</span>
      <h3 className="hero__skill-name font-semibold">Frontend</h3>
    </div>
  </div>
</div>
```

## Benefits

1. **Identification**: Quickly identify component boundaries in DevTools
2. **Grouping**: Group related elements visually
3. **No Conflicts**: BEM prevents class name collisions
4. **Compatibility**: Works alongside Tailwind CSS utility classes
5. **Testing**: E2E tests can target semantic class names
6. **Debugging**: Easier to trace CSS issues to specific components
7. **Maintainability**: Clear component structure and hierarchy

## Component Hierarchy

```
hero (section)
├── hero__container
├── hero__top-row
│   ├── hero__profile
│   │   ├── hero__profile-content
│   │   ├── hero__profile-image
│   │   ├── hero__profile-info
│   │   └── hero__social-links
│   └── hero__about
│       ├── hero__about-intro
│       ├── hero__stats
│       └── hero__highlights
└── hero__bottom-row
    ├── hero__skills
    │   ├── hero__skills-title
    │   └── hero__skills-list
    └── hero__contact
        ├── hero__contact-title
        ├── hero__contact-links
        └── hero__contact-footer

projects (section)
├── projects__container
└── projects__grid
    └── projects__item
        └── projects__card
            ├── projects__image
            ├── projects__content
            └── projects__tech
```

## Implementation Status

- ✅ Hero Section
- ✅ Profile Section
- ✅ About Section
- ✅ Skills Section
- ✅ Contact Section
- ✅ Projects Section

---

**Last Updated**: 2025-10-25
**All Components**: Completed
**Total BEM Classes**: 80+
