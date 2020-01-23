<script>
    export let progress = 0;
    export let onChange;
    export let min = 0;
    export let max = 100;

    let isDragging = false;
    let dragValue = 0;

    async function handleScrubChange(newValue) {
        if (onChange) {
            onChange(newValue);
        }
    }
</script>

<style>
    .scrubber {
        -webkit-appearance: none;
        width: 100%;
        appearance: none;
        outline: none;
        background: #d3d3d3;
        height: 6px;
        border-radius: 5px;
        cursor: pointer;
    }

    .scrubber-progress {
        background: #8e8e8e;
        position: absolute;
        left: 0;
        height: 6px;
        border-radius: 5px;
        pointer-events: none;
    }

    .scrubber:hover::-webkit-slider-thumb {
        -webkit-appearance: none;
        display: block;
        z-index: 99;
        position: relative;
    }

    .scrubber::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #000000;
        border-radius: 50%;
        width: 11px;
        height: 11px;
        display: none;
    }

    .scrubber-container {
        flex-grow: 1;
        margin: 0 12px;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;
    }

    .scrubber::-webkit-slider-thumb:hover {
        -webkit-appearance: none;
        background: #000000;
    }
</style>

<div class="scrubber-container">
    <span class="scrubber-progress" style="{'width:' + (progress / max) * 100 + '%'}" />
    <input  on:input={(event) => handleScrubChange(event.target.value)}
            on:mousedown="{() => isDragging = true}"
            on:mouseup="{() => isDragging = false}"
            class="scrubber"
            type="range"
            min="{min}"
            max="{max}"
            value="{!isDragging ? progress : dragValue}" />
</div>
