<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the customer-facing panel at the index route with shared bottom navigation and separate appointment/contact routes, so each destination is independently accessible.
- Keep service definitions in a shared browser-safe module, so displayed prices and selection details stay consistent.
- Do not claim bookings are saved without a connected booking service; the initial panel is presentation-only.
