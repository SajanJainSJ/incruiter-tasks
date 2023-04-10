import React from 'react';
import "./HighlightedText.css"

const text = "When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education start-up Udacity, in an interview with Recode earlier this week."

const highlightedWords = {
    "2007": "DATE",
    "Sebastian Thrun": "PERSON",
    "Google ": "ORG",
    "American": "NORP",
    "Thrun": "PERSON",
    "Recode": "ORG",
    "earlier this week": "DATE"
}

const highlightText = (text, highlightedWords) => {
    let highlightedText = text;

    Object.keys(highlightedWords).forEach(function (word) {
        highlightedText = highlightedText.replaceAll(new RegExp(word, "gi"), `
        <span class="word ${highlightedWords[word]}">${word}
            <span class="tag ${highlightedWords[word]}">${highlightedWords[word]}</span>
        </span>`);
    });
    return highlightedText;
}

const HighlightedText = () => (
    <div dangerouslySetInnerHTML={{ __html: highlightText(text, highlightedWords) }} />
);

export default HighlightedText;