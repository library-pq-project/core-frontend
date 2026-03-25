<div class="py-20 flex items-center justify-center">
    <div class="loader rotate">
        <div class="inner rotate">
            <div class="innermost rotate"></div>
        </div>
    </div>
</div>

<style>
    @import "../app.css";

    .rotate {
        animation-name: rotate;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: 5;
    }

    div.loader {
        @apply border-3 border-primary;

        & * {
            @apply border-3 border-primary;
        }
    }

    .innermost {
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        animation-duration: 1s;
    }

    .inner {
        padding: 0.5rem;
        transform: rotate(45deg);
        animation-direction: reverse;
    }

    .loader {
        padding: 0.5rem;
        transform: rotate(45deg)
    }

     @keyframes rotate {
        0% {
            transform: rotate(45deg)
        }

        100% {
            transform: rotate(405deg)
        }
    }
</style>
