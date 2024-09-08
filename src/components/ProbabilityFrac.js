export default function ProbabilityFrac({ x, num, den }) {
  return (
    <math>
      <mtable columnalign="left" frame="solid" is="true">
        <mtr is="true">
          <mtd columnalign="right" is="true">
            <mi is="true">P</mi>
            <mo stretchy="false" is="true">
              (
            </mo>
            <mi is="true">{x}</mi>
            <mo stretchy="false" is="true">
              )
            </mo>
            <mo is="true">=</mo>
            <mfrac is="true">
              <mrow is="true">
                <mi is="true">{num}</mi>
              </mrow>
              <mrow is="true">
                <mi is="true">{den}</mi>
              </mrow>
            </mfrac>
          </mtd>
        </mtr>
      </mtable>
    </math>
  );
}
