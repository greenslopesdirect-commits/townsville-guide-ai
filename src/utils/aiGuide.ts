/**
 * Universal AI Guide Trigger Utility
 * Handles navigation, scrolling, focus, and glow animation for the AI input
 */

// Preset questions for common scenarios
export const AI_PRESETS = {
  planDay: "Plan my perfect day in Townsville",
  bestBeach: "Find the best beach today",
  dinnerSpot: "Where should we eat tonight?",
  familyActivities: "Family activities this weekend",
  dogFriendly: "Dog-friendly places near me",
  whatsOn: "What's happening this weekend in Townsville?",
  magneticIsland: "Plan a day trip to Magnetic Island",
  accommodation: "Recommend accommodation near The Strand",
} as const;

export type AIPresetKey = keyof typeof AI_PRESETS;

/**
 * Triggers the AI Guide with a specific question
 * - Navigates to /townsville if not already there
 * - Waits for the Hero component and AI input to load
 * - Sets the input value
 * - Scrolls smoothly to the input
 * - Applies a glow animation
 * - Focuses the input
 */
export async function triggerAiGuide(question: string): Promise<void> {
  const isOnHomePage = window.location.pathname === "/" || window.location.pathname === "";
  
  if (!isOnHomePage) {
    // Store the question in sessionStorage for retrieval after navigation
    sessionStorage.setItem("pendingAiQuestion", question);
    window.location.href = "/";
    return;
  }
  
  // Wait for the input to be available
  await waitForElement("townsville-ai-input", 3000);
  
  // Set the input value via the global function
  if ((window as any).setAiInputValue) {
    (window as any).setAiInputValue(question);
  }
  
  // Get the input element
  const input = document.getElementById("townsville-ai-input") as HTMLInputElement;
  if (!input) return;
  
  // Smooth scroll to the input
  input.scrollIntoView({ behavior: "smooth", block: "center" });
  
  // Wait for scroll to complete, then apply glow
  setTimeout(() => {
    applyGlowAnimation(input);
    input.focus();
  }, 500);
}

/**
 * Waits for an element to appear in the DOM
 */
function waitForElement(id: string, timeout: number): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    const element = document.getElementById(id);
    if (element) {
      resolve(element);
      return;
    }
    
    const observer = new MutationObserver((mutations, obs) => {
      const el = document.getElementById(id);
      if (el) {
        obs.disconnect();
        resolve(el);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    // Timeout fallback
    setTimeout(() => {
      observer.disconnect();
      resolve(document.getElementById(id));
    }, timeout);
  });
}

/**
 * Applies a warm glowing animation to the input
 */
function applyGlowAnimation(element: HTMLElement): void {
  // Add the glow class
  element.classList.add("ai-focus-glow");
  
  // Remove the class after animation completes
  setTimeout(() => {
    element.classList.remove("ai-focus-glow");
  }, 1500);
}

/**
 * Checks for pending AI questions after page load (for cross-page navigation)
 */
export function checkPendingAiQuestion(): void {
  const pendingQuestion = sessionStorage.getItem("pendingAiQuestion");
  if (pendingQuestion) {
    sessionStorage.removeItem("pendingAiQuestion");
    // Delay to ensure Hero component is mounted
    setTimeout(() => {
      triggerAiGuide(pendingQuestion);
    }, 500);
  }
}
