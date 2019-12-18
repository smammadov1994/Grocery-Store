import React, { Component } from "react";

class Benefits extends Component {
  state = {};
  render() {
    return (
      <div className="benefits">
        <h2 style={{ color: "red" }}>Benefits of eating fruits</h2>
        <div>
          <article className="article">
            "Less than 10% of most Western populations consume adequate levels
            of whole fruits and dietary fiber with typical intake being about
            half of the recommended levels. Evidence of the beneficial health
            effects of consuming adequate levels of whole fruits has been
            steadily growing, especially regarding their bioactive fiber
            prebiotic effects and role in improved weight control, wellness and
            healthy aging. The primary aim of this narrative review article is
            to examine the increasing number of health benefits which are
            associated with the adequate intake of whole fruits, especially
            fruit fiber, throughout the human lifecycle. These potential health
            benefits include: protecting colonic gastrointestinal health (e.g.,
            constipation, irritable bowel syndrome, inflammatory bowel diseases,
            and diverticular disease); promoting long-term weight management;
            reducing risk of cardiovascular disease, type 2 diabetes and
            metabolic syndrome; defending against colorectal and lung cancers;
            improving odds of successful aging; reducing the severity of asthma
            and chronic obstructive pulmonary disease; enhancing psychological
            well-being and lowering the risk of depression; contributing to
            higher bone mineral density in children and adults; reducing risk of
            seborrheic dermatitis; and helping to attenuate autism spectrum
            disorder severity. Low whole fruit intake represents a potentially
            more serious global population health threat than previously
            recognized, especially in light of the emerging research on whole
            fruit and fruit fiber health benefits."
            <p style={{ fontWeight: "900" }}>
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315720/
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default Benefits;
