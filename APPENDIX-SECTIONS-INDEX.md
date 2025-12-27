# Appendix Sections Index
## Complete List of All Sections in the Appendix

### Current Sections (13 Total)

1. **Kingdom Gospel vs. Grace Gospel**
   - Verses: 30+
   - Key Verses: Romans 3:20-28, Galatians 1:6-9, Ephesians 2:8-9, etc.
   - Location: First major section

2. **Principles of Doctrine vs. Perfection (Hebrews 6:1-2)**
   - Verses: 40+
   - Key Verses: Hebrews 6:1-2, Hebrews 5:12-14, 1 Corinthians 3:2, etc.
   - Location: After Kingdom vs. Grace Gospel

3. **Paul's Declaration of the Grace Gospel (1 Corinthians 15:1-4)**
   - Verses: 50+
   - Key Verses: 1 Corinthians 15:1-4, Galatians 1:11-12, Romans 1:16, etc.
   - Location: After Principles vs. Perfection

4. **Receive Reward vs. Suffer Loss (1 Corinthians 3:10-15)**
   - Verses: 40+
   - Key Verses: 1 Corinthians 3:10-15, 2 Corinthians 5:10, Revelation 22:12, etc.
   - Location: After Grace Gospel Declaration

5. **Paul as Wise Masterbuilder (1 Corinthians 3:10)**
   - Verses: 40+
   - Key Verses: 1 Corinthians 3:10-11, Galatians 1:11-12, Ephesians 2:20-22, etc.
   - Location: After Reward vs. Loss

6. **Creator God's Existence (Romans 1:19-20)**
   - Verses: 30+
   - Key Verses: Romans 1:19-20, Psalm 14:1, Psalm 53:1, Psalm 19:1, etc.
   - Location: After Masterbuilder

7. **Worshipping Creature More Than Creator (Romans 1:23, 25)**
   - Verses: 30+
   - Key Verses: Romans 1:23, Romans 1:25, Psalm 115:4-8, Acts 17:29, etc.
   - Location: After Creator God's Existence

8. **Traditions of Men vs. Word of God (Matthew 15:3, 9)**
   - Verses: 30+
   - Key Verses: Matthew 15:3, Matthew 15:9, Mark 7:8-13, Colossians 2:8, etc.
   - Location: After Creature Worship

9. **Knowledge of God and Renewing the Mind (Romans 1:28, 12:2)**
   - Verses: 30+
   - Key Verses: Romans 1:28, Romans 12:2, 1 Corinthians 2:16, Philippians 2:5, etc.
   - Location: After Traditions of Men

10. **Speaking Truth: Religion, Politics, Homosexuality**
    - Verses: 30+
    - Key Verses: 2 Timothy 4:2, Acts 5:29, Romans 1:26-27, 1 Corinthians 6:9, etc.
    - Location: After Knowledge of God

11. **Wheat and Tares (알곡과 쭉정이)**
    - Verses: 20+
    - Key Verses: Matthew 13:24-30, Matthew 13:37-43, Matthew 3:12, etc.
    - Location: After Speaking Truth

12. **The 7,000 Who Have Not Bowed to Baal**
    - Verses: 20+
    - Key Verses: 1 Kings 19:18, Romans 11:4-5, Isaiah 1:9, etc.
    - Location: After Wheat and Tares

13. **Can True Christians Follow False Philosophy, Religion, and Ideas?**
    - Verses: 30+
    - Key Verses: Colossians 2:8, Galatians 1:8-9, John 14:6, Romans 12:2, etc.
    - Location: After 7,000 Remnant

### Section Order in File
The sections appear in the order listed above, with the Conclusion section at the very end.

### Total KJV Verses in Appendix
Approximately 400+ KJV Bible verses across all sections.

---

## Template for Adding New Sections

When adding a new section, use this structure:

```tsx
{/* [Section Title] */}
<section className="bg-white rounded-xl shadow-lg p-8 mb-8">
  <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
    <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
      [Section Title]
    </span>
  </h2>
  
  {/* Key Verse Box - Use appropriate color */}
  <div className="bg-gradient-to-r from-[color]-50 to-[color]-50 border-l-4 border-[color]-500 p-6 mb-8 rounded">
    <p className="text-2xl font-semibold text-gray-900 mb-4">
      "[Key verse text]"
    </p>
    <p className="text-right text-gray-600 text-lg">— Book Chapter:Verse (KJV)</p>
  </div>

  <p className="text-lg text-gray-700 leading-relaxed mb-8">
    [Introduction paragraph explaining the concept...]
  </p>

  {/* Subsection 1 */}
  <div className="mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">[Subsection Title]</h3>
    
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-800 mb-2">
          <strong>"[Verse text]"</strong>
        </p>
        <p className="text-sm text-gray-600 text-right">— Book Chapter:Verse (KJV)</p>
      </div>
      {/* Add more verses... */}
    </div>
  </div>

  {/* Continue with more subsections... */}

  {/* Application to Communication - REQUIRED */}
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Understanding [concept] transforms how we communicate:
    </p>
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-start">
        <span className="text-amber-600 font-bold mr-3">•</span>
        <span><strong>[Point 1]:</strong> [Explanation]</span>
      </li>
      {/* Add more points... */}
    </ul>
    <p className="text-lg text-gray-700 leading-relaxed mt-6">
      [Concluding paragraph on how this applies to communication...]
    </p>
  </div>
</section>
```

---

## Color Scheme Reference

- **Blue/Indigo**: For foundational concepts, God's truth
- **Green**: For positive concepts, growth, life
- **Red/Orange**: For warnings, false concepts, sin
- **Purple/Pink**: For grace, love, spiritual concepts
- **Yellow/Amber**: For applications, practical uses
- **Gray**: For neutral content, verse boxes

---

## Verse Citation Format

Always use this exact format:
```tsx
<div className="bg-gray-50 p-4 rounded-lg">
  <p className="text-gray-800 mb-2">
    <strong>"[Full verse text in quotes]"</strong>
  </p>
  <p className="text-sm text-gray-600 text-right">— Book Chapter:Verse (KJV)</p>
</div>
```

---

## Important Reminders

1. **All verses must be KJV only**
2. **Aim for 30+ verses per section** (more is better)
3. **Always include "Application to Communication"** subsection
4. **Update Conclusion** bullet list when adding new sections
5. **Maintain consistent styling** with existing sections
6. **Build before committing**: `npm run build`
7. **Test locally**: `npm run dev`

