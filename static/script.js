document.addEventListener('DOMContentLoaded', function() {
    const outputTextarea = document.getElementById('output-textarea');
    const copyButton = document.getElementById('copy-btn');
    const clearButton = document.getElementById('clear-btn');
    const outputActionsDiv = document.querySelector('.output-actions');
    const form = document.querySelector('form.input-field');
    let topicInput;

    if (form) {
        topicInput = form.querySelector('input[name="topic"]');
    }

    const clearedStateKey = 'promptWiseOutputCleared';

    if (sessionStorage.getItem(clearedStateKey) === 'true' && outputActionsDiv) {
        outputActionsDiv.style.display = 'none';
    }

    if (topicInput) {
        topicInput.focus();
    }

    if (copyButton && outputTextarea) {
        copyButton.onclick = function() {
            if (outputTextarea.value.trim() === '') {
                return;
            }

            outputTextarea.select();

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(outputTextarea.value)
                    .then(function() {
                        copyButton.innerText = 'Copied!';
                        copyButton.disabled = true;
                        setTimeout(function() {
                            copyButton.innerText = 'Copy';
                            copyButton.disabled = false;
                        }, 1500);
                    })
                    .catch(function() {
                        alert('Could not copy. Please try manually.');
                    });
            } else {
                alert('Copy feature not supported. Please copy manually.');
            }

            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
        };
    }

    if (clearButton && outputTextarea && outputActionsDiv) {
        clearButton.onclick = function() {
            outputTextarea.value = '';
            outputActionsDiv.style.display = 'none';
            sessionStorage.setItem(clearedStateKey, 'true');
            if (topicInput) {
                topicInput.focus();
            }
        };
    }

    if (form && topicInput) {
        form.onsubmit = function(event) {
            sessionStorage.removeItem(clearedStateKey);
            if (topicInput.value.trim() === '') {
                event.preventDefault();
                alert('Please enter a topic first.');
                topicInput.focus();
            }
        };
    }
});