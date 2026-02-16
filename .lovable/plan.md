

## Plan: Move Note card closer to menu/title

The user wants the Note card to have a negative top margin of at least -100px so it moves up significantly, sitting close to the title and near the menu.

### Change

**File: `src/pages/Index.tsx` (line 70)**

Change the Note container's margin from `mt-3` to `-mt-[100px]` so it overlaps upward into the hero section, bringing it much closer to the title text and the menu bar.

```
// Before
<div className="container mx-auto px-3 sm:px-4 mt-3 relative z-10">

// After
<div className="container mx-auto px-3 sm:px-4 -mt-[100px] relative z-10">
```

This single change pulls the Note card up by 100px, placing it close to the "GTA Academy" title and reducing the gap between the menu, title, and note card.

