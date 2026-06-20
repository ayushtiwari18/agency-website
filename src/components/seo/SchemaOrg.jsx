/**
 * SchemaOrg — injects JSON-LD structured data via a <script> tag.
 * Pass any valid schema object as `schema` prop.
 */
export default function SchemaOrg({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
