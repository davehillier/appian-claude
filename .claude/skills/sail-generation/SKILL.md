---
name: sail-generation
description: Generates Appian SAIL UI expressions from natural language requests, then converts them to functional interfaces with live record data.
---

# SAIL Generation Skill

## Purpose

Generate production-quality Appian SAIL UI expressions from natural language descriptions. Follows the two-phase workflow from the `resources/sail-generator/` toolkit.

---

## Output Location

**Generated SAIL files:** Create an `output/` folder in your project root for generated interfaces.

---

## Two-Phase Workflow

### Phase 1: Mockup Generation

Generate static SAIL expressions with hardcoded sample data.

**Process:**
1. Parse user request (full page vs single component)
2. Read relevant guidelines from `resources/sail-generator/ui-guidelines/`
3. Generate SAIL with `a!localVariables()` and `a!map()` sample data
4. Validate syntax (no `ri!` or `recordType!` references)
5. Write output to `output/<name>.sail`

**Key Rules:**
- All logic inline (no `rule!` or `cons!` references)
- Use `a!map()` for sample data, not record references
- Follow null safety patterns from `resources/sail-generator/logic-guidelines/`

### Phase 2: Functional Conversion

Convert mockups to live interfaces with record queries.

**Prerequisites:**
- Populate `resources/sail-generator/context/data-model-context.md` with:
  - Record type names and UUIDs
  - Field definitions and UUIDs
  - Relationships between record types

**Process:**
1. Read the mockup from Phase 1
2. Read data model context
3. Replace `a!map()` data with `a!queryRecordType()` calls
4. Apply proper null safety patterns
5. Validate against record query guidelines

---

## Guidelines Reference

| Topic | Path |
|-------|------|
| **UI Components** | `resources/sail-generator/ui-guidelines/` |
| **SAIL Schema** | `resources/sail-generator/ui-guidelines/reference/sail-api-schema.json` |
| **Logic Patterns** | `resources/sail-generator/logic-guidelines/LOGIC-PRIMARY-REFERENCE.md` |
| **Record Queries** | `resources/sail-generator/record-query-guidelines/RECORD-QUERY-PRIMARY-REFERENCE.md` |
| **Conversion** | `resources/sail-generator/conversion-guidelines/` |
| **Icon Reference** | `resources/sail-generator/ui-guidelines/reference/rich-text-icon-aliases.md` |

---

## Critical Syntax Rules

### Never Use:
- `fv!index` in grid columns (only `fv!row`)
- `and()` for null checks (use `if()` short-circuit)
- Nested `sideBySideLayouts`
- Null or empty strings in `choiceValues`
- JavaScript syntax (`a and b` -> `and(a, b)`)

### Always Use:
- `a!localVariables()` as parent element
- `todate()` wrapper for date arithmetic
- `a!defaultValue()` for null-unsafe function parameters
- Type-initialised empty arrays: `tointeger({})`, `touniformstring({})`
- `index(selection, 1, null)` for grid selection access

---

## Null Safety Pattern

```sail
/* RIGHT - if() short-circuits */
showWhen: if(a!isNotNullOrEmpty(local!id),
              local!id = fv!row.id,
              false())

/* WRONG - and() evaluates all parameters */
showWhen: and(a!isNotNullOrEmpty(local!id),
              local!id = fv!row.id)  /* CRASHES if null */
```

---

## Output Format

```sail
a!localVariables(
  /* REQUIREMENT: [Interface purpose from user request] */

  /* Sample data - replace with record queries in Phase 2 */
  local!data: {
    a!map(id: 1, name: "Example", status: "Active"),
    a!map(id: 2, name: "Another", status: "Pending")
  },

  /* Main interface */
  a!headerContentLayout(
    /* ... */
  )
)
```

---

## Validation Checklist

Before finalising output:

- [ ] Starts with `a!localVariables()`
- [ ] All braces/parentheses matched
- [ ] Strings use `""` escaping (not `\"`)
- [ ] Comments use `/* */` (not `//`)
- [ ] No `fv!index` in grid columns
- [ ] No nested `sideBySideLayouts`
- [ ] At least one AUTO-width column in each `columnsLayout`
- [ ] All null-unsafe operations protected
- [ ] Date arithmetic wrapped in `todate()`
- [ ] Icons validated against `rich-text-icon-aliases.md`
